import { useEvent } from '@/hooks';
import { inputSelector, updateValue, useQRScoutState } from '@/store/store';
import React, { useCallback, useEffect, useMemo } from 'react';
import { TBAMatchNumberInputData } from './BaseInputProps';
import { ConfigurableInputProps } from './ConfigurableInput';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';

export default function TBAMatchNumberInput(props: ConfigurableInputProps) {
  const data = useQRScoutState(
    inputSelector<TBAMatchNumberInputData>(props.section, props.code),
  );
  const matchData = useQRScoutState(state => state.matchData);

  if (!data) {
    return <div>Invalid input</div>;
  }

  const [value, setValue] = React.useState<string | ''>(data.defaultValue);

  // Extract unique match numbers from match data
  const matchOptions = useMemo(() => {
    if (!matchData || matchData.length === 0) {
      return [];
    }

    const qualificationMatches = matchData.filter(
      match => match.comp_level === 'qm' || match.comp_level === 'sf' || match.comp_level === 'f'
    );

    const matchNumbers = qualificationMatches
      .map(match => match.key
        // {
        //   if (match.comp_level==='qm') 
        //   {
        //     return match.comp_level + match.match_number
        //   } 
        //   else
        //     return match.comp_level + match.set_number +'m' + match.match_number
        // }
      )
      .filter(num => num !== undefined);
//      .sort((a, b) => a - b);

    // Remove duplicates
    //return [...new Set(matchNumbers)];
    return matchNumbers;
  }, [matchData]);

  const resetState = useCallback(
    ({ force }: { force: boolean }) => {
      if (force) {
        setValue(data.defaultValue);
        return;
      }
      if (data.formResetBehavior === 'preserve') {
        return;
      }
      setValue(data.defaultValue);
    },
    [data.defaultValue, data.formResetBehavior],
  );

  useEvent('resetFields', resetState);

  useEffect(() => {
    updateValue(props.code, value);
  }, [value, props.code]);


  const handleSelectChange = useCallback((value: string) => {
//    setValue(Number(value));
    setValue(value);
  }, []);

  // Use a dropdown select if we have match options, otherwise use a regular number input
  if (matchOptions.length > 0) {
    return (
      <Select
        name={data.title}
        onValueChange={handleSelectChange}
        value={value ? value.toString() : ''}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select a match" />
        </SelectTrigger>
        <SelectContent>
          {matchOptions.map(matchNum => (
            <SelectItem key={matchNum} value={matchNum.toString()}>
              
               Match {matchNum.split('_')[1]}
            </SelectItem> 
          ))}
        </SelectContent>
      </Select>
    );
  }

  // Fall back to standard number input if no match options are available
  return (
    <Input
      type="number"
      value={value}
      id={data.title}
      min={data.min}
      max={data.max}
      onChange={(e) => {

//        const parsed = Number(e.target.value);
        const parsed = e.target.value;
        if (e.target.value === '') {
          setValue('');
          return;
        }
        // if (isNaN(parsed)) {
        //   return;
        // }
        if (data?.min && parsed < data.min) {
          return;
        }
        if (data?.max && parsed > data.max) {
          return;
        }
        setValue(parsed);
      }}
      placeholder="Enter match number"
    />
  );
}

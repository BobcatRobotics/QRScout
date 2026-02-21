ARG VARIANT=20-bullseye
FROM mcr.microsoft.com/devcontainers/javascript-node:0-${VARIANT}

# Install git (extra tools if needed)
RUN apt-get update && apt-get install -y git && rm -rf /var/lib/apt/lists/*

# Enable corepack and prepare pnpm (optional; npm is used by project)
RUN corepack enable && corepack prepare pnpm@latest --activate || true

WORKDIR /workspace

# Default user is 'vscode' from base image
EXPOSE 5173
CMD ["sleep", "infinity"]

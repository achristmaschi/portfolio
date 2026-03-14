#!/bin/bash
# Run this on your Mac: bash setup-nvm.sh

ZSHRC="$HOME/.zshrc"

# Create .zshrc if it doesn't exist
touch "$ZSHRC"

# Add nvm config if not already present
if ! grep -q 'NVM_DIR' "$ZSHRC"; then
  echo '' >> "$ZSHRC"
  echo '# nvm' >> "$ZSHRC"
  echo 'export NVM_DIR="$HOME/.nvm"' >> "$ZSHRC"
  echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> "$ZSHRC"
  echo '[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"' >> "$ZSHRC"
  echo "✅ Added nvm to $ZSHRC"
else
  echo "ℹ️  nvm already configured in $ZSHRC"
fi

# Source it now so nvm is available immediately
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Install and use Node 22
nvm install 24
nvm use 24
nvm alias default 24

echo ""
echo "✅ Done! Node $(node --version) is ready."
echo "👉 Quit VS Code fully (Cmd+Q) and reopen it for the terminal to pick up nvm."

# Packages
```sh
apt install tmux
# Enable mouse scrolling
echo "set -g mouse on" >> ~/.tmux.conf
```

# Nix
```sh
nix-shell -p nvim bc util-linux ncdu htop fzf ranger feh eza
```

## For servers

- nvim: Text editor
- bc: Basic calculator
- util-linux: Add a lot of Linux utilities
  - cfdisk: Disk partitioning
  - cal: Simple Calendar
- ncdu: Disk usage analyzer
- htop: Process monitor
- fzf: Fuzzy finder
- ranger: File manager
- feh: Image viewer
- eza: File manager
  - exa: File manager

## Extra packages

- mplayer: Video player
- calcurse: Calendar
- gcalcli: Google Calendar
- musikcube: Music player
- mpg123: Single instance mp3 player
- libcaca: Terminal image viewer
  - cacaview: Image viewer in character mode
- browsh: Web browser
- ffmpeg_7-headless: Video tools
- slides: Presentation tool
- translate-shell: Translate text

## To test

- sensors: List hardware status
- speedtest-cli: Internet speed test
- elinks: Browser
- s-tui: Temperature monitor
- logo-ls: ls command with logos
- btop: Process monitor

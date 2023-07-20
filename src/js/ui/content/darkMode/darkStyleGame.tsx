export const darkStyleGame = `
/* En jeu */
.gamestart_overlay {
  background: none var(--dark-20);
  color: var(--light-80);
}

.game_interface #topbar,
.game_interface #page-title,
.game_interface .current_player_is_active #page-title,
.game_interface .gamestate_gameEnd #page-title {
  background: var(--dark-10);
  color: var(--light-80);
}

.game_interface #ingame_menu_content {
  background: var(--dark-30);
  color: var(--light-80);
}

.game_interface #ingame_menu_content a {
  color: var(--light-80);
}

.game_interface .player-board,
.game_interface .player-board .roundedbox_main,
.game_interface .player-board .roundedbox_topleft,
.game_interface .player-board .roundedbox_topmain,
.game_interface .player-board .roundedbox_topright,
.game_interface .player-board .roundedbox_bottomleft,
.game_interface .player-board .roundedbox_bottommain,
.game_interface .player-board .roundedbox_bottomright {
  background: var(--dark-20);
  color: var(--light-80);
}

.game_interface .log .roundedbox .playername {
  display: inline !important;
}

.game_interface #logs .log .roundedbox {
  background: var(--dark-10);
  color: var(--light-80);
}

.game_interface #logs .log .timestamp {
  color: var(--light-80);
}

.game_interface #logs .log:hover .timestamp {
  background: var(--dark-40);
}

.game_interface .bgabutton_gray {
  background: var(--dark-40);
  color: var(--light-80);
}

.game_interface .bgabutton_gray:hover {
  background: var(--dark-40);
  color: var(--violet-80);
}

.game_interface .pagesection {
  background: var(--dark-20);
  color: var(--light-80);
}

.game_interface .pagesection .whiteblock {
  background: none var(--dark-40);
}

.game_interface .pagesection h2,
.game_interface .pagesection h3 {
  background: var(--dark-10);
  color: var(--light-80);
}

.game_interface .pagesection .bga-link {
  color: var(--blue-80);
}

.game_interface .pagesection .bga-link:hover {
  color: var(--violet-80);
}

.game_interface .preference_control {
  background: var(--dark-40);
  color: var(--light-80);
}

.game_interface .chatwindowtype_table .chatbarbelowinput_item {
  color: var(--light-80);
}

.game_interface .chatwindowtype_table .chatbarbelowinput_item:hover {
  color: var(--violet-80);
}

#loader_mask {
  background: var(--dark-40);
}

span[style="font-weight:bold;color:#000000;"], span[style="color:#000000;"], span[style="color:#000000"], a[style="color: #000000"] {
  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
}
span[style="font-weight:bold;color:#0000ff;"], span[style="color:#0000ff;"], span[style="color:#0000ff"], a[style="color: #0000ff"] {
  color: #8080ff !important;
}
span[style="font-weight:bold;color:#982fff;"], span[style="color:#982fff;"], span[style="color:#982fff"], a[style="color: #982fff"] {
  color: #bf80ff !important;
}
span[style="font-weight:bold;color:#1863a5;"], span[style="color:#1863a5;"], span[style="color:#1863a5"], a[style="color: #1863a5"] {
  color: #8fc2ef !important;
}
span[style="font-weight:bold;color:#0000dd;"], span[style="color:#0000dd;"], span[style="color:#0000dd"], a[style="color: #0000dd"] {
  color: #8080ff !important;
}
span[style="font-weight:bold;color:#442df0;"], span[style="color:#442df0;"], span[style="color:#442df0"], a[style="color: #442df0"] {
  color: #9588f7 !important;
}


span.playername, #pagemaintitletext > span:first-child {
  background: transparent !important;
}

.icon32_replaylastmoves, .ingame_menu_item .icon64, .winpoints > img {
  filter: invert(70%);
}
.notouch-device .ingame_menu_item:hover {
  background-color: transparent;
  color: var(--violet-80) !important;
}

#maingameview_menuheader, #maingameview_menufooter {
  filter: invert(70%);
}

.avatar_active {
  filter: invert(100%);
}

/*
.player-name > a, .roundedbox > .playername, #pagemaintitletext > span:first-child {
  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
}*/

/* Menu flottant */
#right-side-second-part {
  background: black !important;
}
`;

export const gamesWithCustomBackground = ['abyss', 'conspiracy'];

const _darkStyleForGame = {};

_darkStyleForGame['hanabi'] = `
.bgagame-hanabi #hanabi_prefs .bgabutton_gray {
  background: var(--dark-10);
  color: var(--light-80);
}
.bgagame-hanabi #hanabi_prefs .bgabutton_gray:hover {
  background: var(--dark-30);
}
`;

_darkStyleForGame['arknova'] = `
.player-name > svg, .slider, #help-mode-switch {
  filter: invert(70%);
}
`;

_darkStyleForGame['catan'] = `
.cat_panel_prim_icons, #player_boards .cat_panel_prim_icons .cat_panel_score {
  filter: invert(100%) !important;
}
`;

_darkStyleForGame['carcassonne'] = `
.partisan_000000 {
  filter: invert(20%) !important;
}
`;

_darkStyleForGame['challengers'] = `
.cha-log-holder {
  background: var(--dark-20);
  color: var(--light-80);
}
`

_darkStyleForGame['agricola'] = `
#central-board .turn-action-container .turn-number {
  filter: invert(100%) grayscale(100%);
}
#player_boards > div {
  background-color: #00000090!important;
}
`





export const darkStyleForGame = _darkStyleForGame;
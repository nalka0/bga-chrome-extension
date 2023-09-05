import { getUrl } from "../utils/chrome";

export const gamesWithCustomBackground = [
  'abyss',
  'agricola',
  'azul',
  'beyondthesun',
  'carnegie',
  'chromino',
  'concept',
  'conspiracy',
  'draculahelsing',
  'dobbleconnect',
  'earth',
  'eminentdomain',
  'emdomicrocosm',
  'gangsta',
  'goldblivion',
  'iwari',
  'jekyllvshide',
  'jumpdrive',
  'kingoftokyo',
  'lielow',
  'memoir',
  'mrjack',
  'mycity',
  'newfrontiers',
  'notalone',
  'nowboarding',
  'numberdrop',
  'ontour',
  'oriflamme',
  'pandemic',
  'patchwork',
  'pingimus',
  'quirkyquarks',
  'raceforthegalaxy',
  'santorini',
  'secretmoon',
  'skull',
  'sobektwoplayers',
  'spacebase',
  'spaceempires',
  'spacestationphoenix',
  'splendor',
  'stella',
  'starfluxx',
  'thecrew',
  'talon',
  'trio',
  'wizardsgrimoire'
];

export const gamesWithCustomPanel = [
  'eminentdomain',
  'emdomicrocosm',
  'envelopesofcash',
  'lumen',
  'notalone',
  'nowboarding',
  'sevenwondersarchitects',
  'spacestationphoenix',
  'tickettoride',
  'viticulture',
  'wingspan'
];

export const gamesWithCustomDarkMode = {
  hardback: 'dark'
};

export const gamesWithCustomPlayerStyle = {
  mindup: '.player-table .name-wrapper',
  lineit: '.player-table .name-wrapper',
  elawa: '.player-table .name-wrapper',
  butterfly: '.playerHand h3',
  homesteaders: '#main_container div[id^="player_name_"]',
  tucano: '.tuc_header',
  mue: '.mue_bidtablename',
};

// games using popups :
// schroedingerscats, gonutsfordonuts, via magica, superfantasybrawl

// review Settings from Tisaac games

export const gamesWithCustomActions = {
  newfrontiers: {
    setDarkMode: (darkMode: string) => {
      const input = document.getElementById('preference_control_101') as any;
      input.value = (darkMode) ? "1" : "2";
      input.dispatchEvent(new Event("change"));
    },
    isDarkMode: () => {
      const input = document.getElementById('preference_control_101') as any;
      return input.value == "1";
    },
    init: () => { }
  },
  hardback: {
    setDarkMode: (darkMode: string) => {
      const input = document.getElementById('preference_control_101') as any;
      input.value = (darkMode) ? "2" : "1";
      input.dispatchEvent(new Event("change"));
    },
    isDarkMode: () => {
      const input = document.getElementById('preference_control_101') as any;
      return input.value == "2";
    },
    init: () => {
      const input1 = document.getElementById('preference_control_101') as any;
      const input2 = document.getElementById('preference_fontrol_101') as any;

      const hardbackModeChange = (input) => {
        const button = document.getElementById('bga_extension_dark_mode_icon')?.firstChild?.firstChild as any;

        if (button) {
          if (input.value === "2" || (input.value === "0" && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            button.classList.remove('fa-sun-o');
            button.classList.add('fa-moon-o');
          } else {
            button.classList.add('fa-sun-o');
            button.classList.remove('fa-moon-o');
          }
        }
      };

      input1.addEventListener('change', () => hardbackModeChange(input1));
      input2.addEventListener('change', () => hardbackModeChange(input2));
    }
  },
};

const _darkStyleForGame = {};
const _styleForGame = {};

_darkStyleForGame['abyss'] = `
#krakenToken, #scourgeToken { filter: var(--highlight); }
.icon { filter: var(--highlight-min); }
`;

_darkStyleForGame['afterus'] = `
.icon { filter: var(--highlight-min); }
`;

_darkStyleForGame['ageofchampagne'] = `
body { background: none; }
#player_boards .AOCsvg { filter: var(--highlight); }
#player_boards .AOCplayer-PP:after { color: #fff; }
`;

_darkStyleForGame['ageofcivilization'] = `
.aoc_icon, .meeple  { filter: var(--highlight-min); }
`;

_darkStyleForGame['agricola'] = `
#player_boards > div { background-color: #000000CC !important; }
`;

_darkStyleForGame['akeruption'] = `
#txtHand { color: #fff; }
`;

_darkStyleForGame['akropolis'] = `
.player-table .name-wrapper, #market #remaining-stacks { background: var(--dark-back); }
`;

_darkStyleForGame['amerigo'] = `
#generalreserve { background: var(--dark-back); }
#generalreserve h3, .amg_playerreserve h3, .amg_playersupply h3 { font-weight: normal; color: #fff; }
.amg_playersection { background: var(--dark-20); }
.amg_playerreserve, .amg_playersupply { background: var(--dark-40); }
.amg_miniboard_counter { background: var(--dark-40); border-color: var(--dark-40);}
.amg_player_tabs a { background-color: #000; background-image: linear-gradient(180deg,#000,#444); text-shadow: none; color: #fff; }
.amg_player_tabs a:focus,.amg_player_tabs a:focus:after { background: #000; }
.amg_player_tabs a:after { background: #000; background-image: linear-gradient(180deg,#000,#444); }
.amg_player_tabs .amg_current a,.amg_player_tabs .amg_current a:after { background: #000; }
.amg_player_tabs a:hover,.amg_player_tabs a:hover:after { background: #000; }
.amg_playersubsection { background: var(--dark-0); }
.amg_player_order { color: #000; }
.amg_counter_icon { filter: var(--highlight-min); }
`;

_darkStyleForGame['anachrony'] = `
.playeroverall { background: var(--dark-back); color: #fff; }
.anaicon { filter: var(--highlight-min) !important; }
`;

_darkStyleForGame['applejack'] = `
#zoomplus, #zoomminus { color: var(--light-80); }
.aj_sprite { filter: var(--highlight); }
.aj_playerBlock > div > h3 { background-color: var(--dark-20) !important; }
`;

_darkStyleForGame['architectsofthewestkingdom'] = `
.playeroveroverall { background-color: var(--dark-back); }
#logs .arcicon, #player_boards .arcicon { filter: var(--highlight-min); }
`;

_darkStyleForGame['arcticscavengers'] = `
.scv-pile-count { color: #fff; }
`;

_darkStyleForGame['arknova'] = `
.player-name > svg, .slider, #help-mode-switch { filter: invert(0.7); }
.ark-log-card-name { color: #fffafb; }
#player_boards .arknova-icon, #logs .arknova-icon, #maintitlebar_content .arknova-icon { filter: var(--highlight-min); }
`;

_darkStyleForGame['arnak'] = `
.hand-amt { background: var(--dark-20); padding: 0.3em 0.5em; border-radius: 8px; color: #fff; top: -40px; }
.hand-amt .player-name { background: transparent; }
`;

_darkStyleForGame['astra'] = `
.tbp-icon.tbp-icon-bag, .tbp-icon.tbp-icon-dust, .tbp-icon.tbp-icon-telescope, .tbp-icon.tbp-icon-wisdom { filter: invert(0.7); }
.player_board_inner .player_score_value { filter: invert(1); }
.tbp-startPlayer { filter: var(--highlight); }
`;

_darkStyleForGame['automobiles'] = `
#AMBDisplayOptionsToggle { filter: invert(0.7); }
.amb-rank-icon, .amb-inner-icon { filter: var(--highlight-min); }
`;

_darkStyleForGame['babydinosaurrescue'] = `
.card { color: #000; }
.selected_card { box-shadow: none; filter: var(--highlight-max); }
`;

_darkStyleForGame['bandido'] = `
.cp_board_hand, #resize { filter: invert(1); }
body { background: none; }
`;

_darkStyleForGame['barenpark'] = `
.bp-player-area-container, .bp-supply-board-overlap { background: var(--dark-back) !important; }
.bp-supply-board-view-button, .bp-player-panel-columns { filter: invert(1); }
.bp-player-panel-zoom { filter: grayscale(1); }
`;

_darkStyleForGame['barrage'] = `
html.darkpanel .player-board { background: var(--dark-30) !important; }
`;

_darkStyleForGame['battleoflits'] = `
.licount, .tscount { text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000; }
`;

_darkStyleForGame['battleship'] = `
#board { background: var(--dark-20); color: #fff; }
.table-cell { background: var(--dark-40); }
.fleetship { box-shadow: inset 0px 0px 2px 2px #fff; }
`;

_darkStyleForGame['beyondthesun'] = `
#player_boards .bts-icon-vp, #logs .bts-icon-vp, #player_boards .bts-icon-ore, #logs .bts-icon-ore { filter: invert(0.7); }
.bts-faction { text-shadow: -1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff; }
`;

_darkStyleForGame['blackjack'] = `
.player_score span[style="color: #000;"] { color: #fff !important; }
#playertable { background: linear-gradient(0deg,#003300,#001a00); }
.card_list_info { background: var(--dark-10); color: #fff; }
`;

_darkStyleForGame['bloodrage'] = `
.br_board { text-shadow: -1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff; }
.br_board_button { text-shadow: none; filter: invert(1); }
`;

_darkStyleForGame['boomerangaustralia'] = `
.bg-arrow-left { background-color: #021f31e8; color: #fff; }
.box-name { background-color: #0a0700e6; }
`;

_darkStyleForGame['boomerangeurope'] = `
.bg-arrow-left { background-color: #021f31e8; color: #fff; }
`;

_darkStyleForGame['boomerangusa'] = `
.bg-arrow-left { background-color: #021f31e8; color: #fff; }
.box-name { color: #000; }
`;

_darkStyleForGame['briscola'] = `
.table_color { background: var(--dark-back); }
.playertablename, .table_cell { color: #fff; }
.playertablename { text-shadow: none!important; }
#game_board { background-color: #004d00; }
`;

_darkStyleForGame['burglebros'] = `
#popin_tile_distribution { background: var(--dark-20); }
#popin_tile_distribution h2 { color: #fff; }
#popin_tile_distribution_close { filter: invert(1); }
`;

_darkStyleForGame['butterfly'] = `
.playerHand div:not(.captures), #drawDiscard > div:not(#drawWrap)  { background-color: var(--dark-20) !important; }
.captures, #draw { margin-top: 0px !important; }
#drawWrap { background-color: transparent !important; }
#commonArea { color: #fff; }
.Bee, .Bfly, .Crick, .Dfly, .Flower, .Lbug, .Wasp { filter: var(--highlight); }
`;

_darkStyleForGame['buttons'] = `
.player-name { text-shadow: none; }
`;

_darkStyleForGame['cacao'] = `
.player_score_value { color: #000; }
#jungle_display { background-color: var(--dark-back); border: 5px solid var(--dark-back); }
`;

_darkStyleForGame['cantstop'] = `
.diceactions, .dicechoice_plus { color: #fff; }
`;

_darkStyleForGame['canvas'] = `
#bga-zoom-controls { filter: invert(0.7); }
`;

_darkStyleForGame['cantstopexpress'] = `
h5 { color: #fff; }
.pad { filter: invert(0.8) grayscale(1); }
.containermepad > h1 { background: var(--dark-20); margin-top: 0.5em; padding: 0.3em 1em !important; border-radius: 8px; text-shadow: -1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff; }
`;

_darkStyleForGame['capereurope'] = `
.tbp-cardSlot { box-shadow: 0 3px 1px #cc6600b3; }
`;

_darkStyleForGame['caravan'] = `
.camel, .log .cube { filter: var(--highlight-min); }
`;

_darkStyleForGame['carcassonne'] = `
#player_boards .partisan { filter: var(--highlight-min); }
body { background: none !important; }
`;

_darkStyleForGame['carcassonnehuntersandgatherers'] = `
#player_boards .tribeMember, #player_boards .hut { filter: var(--highlight-min); }
body { background: none !important; }
`;

_darkStyleForGame['carnegie'] = `
 .cng_firstplayer { filter: var(--highlight); }
 .cng_token,  .player_score > i { filter: var(--highlight-min); }
 .cng_playerboard_counter { filter: invert(1); }
 #pagemaintitletext > span { background-color: transparent !important; }
`;

_darkStyleForGame['castlesofcaleira'] = `
#zoom-controls, .coc_scroll_arrow { filter: invert(0.7); }
`;

_darkStyleForGame['catan'] = `
.cat_panel_prim_icons, #player_boards .cat_panel_prim_icons .cat_panel_score { filter: invert(1) !important; }
`;

_darkStyleForGame['catcafe'] = `
.ctc_psb_footprint, .ctc_log_shape { filter: var(--highlight); }
`;

_darkStyleForGame['caverna'] = `
#central-board .turn-action-container .turn-number, #help-mode-switch > label, #show-expedition { filter: invert(1); }
#player_config #round-counter-wrapper { background-color: #000; }
.caverna-meeple { filter: var(--highlight-min); }
#floating-building-boards-wrapper[data-open=bonus] #floating-building-buttons .building-board-button[data-id=bonus],
#floating-building-boards-wrapper[data-open=dwellings] #floating-building-buttons .building-board-button[data-id=dwellings],
#floating-building-boards-wrapper[data-open=food] #floating-building-buttons .building-board-button[data-id=food],
#floating-building-boards-wrapper[data-open=materials] #floating-building-buttons .building-board-button[data-id=materials]
{ background: #000; color: #e6e7e9; }
`;

_darkStyleForGame['celestia'] = `
#captain_icon { filter: invert(0.7); }
`;

_darkStyleForGame['century'] = `
html.century_theme.spice #logs .log_replayable .roundedbox { background: #272a2f; }
.logitem.mcard_forlog { background-color: #040404; }
.mcard_forlog:after { border-left: 7px solid #040404; }
.logitem.gcard_forlog { background-color: #040404; color: #e59480; }
`;

_darkStyleForGame['challengers'] = `
.cha-log-holder { background: var(--dark-20); color: var(--light-80); }
.cha-matchup-name-inner { background: var(--dark-20); padding: 0.3em 0.5em; border-radius: 8px; }
.cha-name-404040 { text-shadow: -1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff; }
`;

_darkStyleForGame['chicagoexpress'] = `
#ce-end-game-tracker { background: rgb(39 42 47 / 90%); color: #fff; }
`;

_darkStyleForGame['chromino'] = `
#btn_user_prefs { filter: invert(1); }
.block-user-pref-radio label { background-color: #111; }
#map_container { background-image: url(${getUrl('img/dark_theme/background.jpg')}); }
.tile.icon { filter: var(--highlight-min); }
`;

_darkStyleForGame['cinco'] = `
.playertablename { color: #fff !important; }
`;

_darkStyleForGame['cityofthebigshoulders'] = `
.panel-token { filter: var(--highlight-min); }
#main_board { color: #000; }
`;

_darkStyleForGame['clansofcaledonia'] = `
.auction-bidding-item, .cc_counter { background: var(--dark-20); }
.token24 { filter: var(--highlight-min); }
`;

_darkStyleForGame['codexnaturalis'] = `
#overall-content, body { background: none! important; }
`;

_darkStyleForGame['coinche'] = `
.currentBidInfo__player, .bid-value { color: var(--light-80); }
.card-color-icon { filter: grayscale(1) invert(1); }
`;

_darkStyleForGame['coloretto'] = `
#coloretto_warning { background: var(--dark-20); color: #fff; }
#round_status, #deck_count { color: #fff; }
`;

_darkStyleForGame['colorado'] = `
.player-infos .icons { filter: var(--highlight); }
.player-infos .counter:before, .color, #caller { filter: var(--highlight-min); }
.board .name { background-color: var(--dark-20); }
`;

_darkStyleForGame['coltexpress'] = `
.bullets { filter: var(--highlight-min); }
`;

_darkStyleForGame['concept'] = `
#word-timer { filter: invert(1); }
h2#word-display[data-lvl="2"] { text-shadow: -1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff; }
div.preference_choice:has(> div > div > select#preference_control_100) { display: none; }
div.preference_choice:has(> div > div > select#preference_fontrol_100) { display: none; }
`;

_styleForGame['concept'] = `
#darkmode-switch { display: none; }
`;

_darkStyleForGame['connectfour'] = `
#logs span[style="color:#ff0000; font-weight:bold; background-color:#bbbbbb"], #logs span[style="color:#ffff00; font-weight:bold; background-color:#bbbbbb"] { background-color: transparent !important; }
`;

_darkStyleForGame['conspiracy'] = `
.token { filter: var(--highlight-min); }
`;

_darkStyleForGame['coupcitystate'] = `
.playerhead { text-shadow: none; }
#myactions { color: #fff; }
.action { background: var(--dark-20); }
.action:hover, .action.pending, .placemat:hover, .placemat.selected { background: var(--dark-40); }
`;

_darkStyleForGame['cribbage'] = `
.club, .spade { text-shadow: -1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff; }
#cutCardSpace { color: #fff; }
`;

_darkStyleForGame['crimezoom'] = `
#tab-bar li { background-color: var(--dark-back); }
#tab-bar li.active,#tab-bar li:hover, #main-content { background-color: var(--dark-20); color: #fff; }
`;

_darkStyleForGame['crusadersthywillbedone'] = `
#CRUOptionsToggle { filter: invert(0.7) }
`;

_darkStyleForGame['cubirds'] = `
.block_title { background-image: none; background-color: var(--dark-20); }
#zoomin_left, #zoomin_right, #zoomout_left, #zoomout_right { background-color: transparent; box-shadow: none; filter: invert(0.7); }
`;

_darkStyleForGame['cubosaurs'] = `
.cbsr_playerarea_container { background: var(--dark-back); }
.name-content { background: linear-gradient(0deg,var(--dark-20),#000); }
.container-vm { color: #ff5d5d; text-shadow: none; background: var(--dark-20); }
.cbsr_dna_count { color: #6666ff; }
`;

_darkStyleForGame['deus'] = `
.deus_player_display .deus_resource_indicator, .deus_log_resource { filter: var(--highlight-min); }
`;

_darkStyleForGame['diceforge'] = `
#nb-turns-container { color: #fff; }
.action-bar { border: 1px solid rgb(255 255 255 / 20%); }
.header-action { background-color: rgba(255,255,255,.1); }
.cards-pile { box-shadow: 0 0 2px 0 #9f9393; }
`;

_darkStyleForGame['dinnerinparis'] = `
h3 { color: #fff; }
`;

_darkStyleForGame['dinosaurteaparty'] = `
.guess_text { color: #000; }
`;

_darkStyleForGame['dobble'] = `
#game_play_area div[id^="player_name_"], .pile-description div:not(.dbl_sleep) { background-color: var(--dark-20); }
`;

_darkStyleForGame['dobbleconnect'] = `
.dc_boardscore { filter: var(--highlight-max); }
.dc-hand-bg { background-color: var(--dark-back); }
`;

_darkStyleForGame['doglover'] = `
#DOGFoodMode { filter: invert(1); }
#page-content { color: #fff; }
.DOG-watchdog { filter: var(--highlight-max); }
`;

_darkStyleForGame['downforce'] = `
.df-car-token-small { filter: var(--highlight); }
`;

_darkStyleForGame['draculahelsing'] = `
.dh_board_title_graf { filter: var(--highlight); }
`;

_darkStyleForGame['draftosaurus'] = `
.player-label { background: var(--dark-10) }
#logs .die { filter: invert(1); }
.dino-number { color: #000; }
`;

_darkStyleForGame['dragonbridge'] = `
#nestCardCountContainer, #nestCounterContainer, #phases_wrap { color: #fff; }
.cardCountIcon, .nestCounterIcon, .deckCounterIcon { filter: var(--highlight-min); }
`;

_darkStyleForGame['dragoncastle'] = `
.playerTable > div:first-child { background: var(--dark-20) !important; }
`;

_darkStyleForGame['dragonheart'] = `
#ship_stack_count { color: #fff; }
`;

_darkStyleForGame['dragonwood'] = `
.sideheadbutton, .display_dice_button { background-color: #000; }
.roll_dice_button[style="background-color: rgb(0, 255, 0);"] { background-color: #006600 !important; }
.roll_dice_button { background-color: #006600; }
.ac_icon, .c_icon { filter: var(--highlight-min); }
`;

_darkStyleForGame['dungeonpetz'] = `
.side_title { text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000; }
`;

_darkStyleForGame['dungeonroll'] = `
.navigation>li { filter: invert(0.7); }
.navigation>li.selected { background-color: #7dff00; }
`;

_darkStyleForGame['durak'] = `
.attacker_token, .defender_token { filter: var(--highlight-min); }
`;

_darkStyleForGame['earth'] = `
.ea-player-panel-pill .ea-pill-counter { color: #343134; }
.ea-objective-button .ea-pill-counter { color: #fff !important; }
.bx-checkbox-switch, #ea-tableau-slider, #ea-fauna-slider { filter: grayscale(1); }
.ea-icon-sprout, .ea-icon-soil, .ea-icon-growth { filter: invert(1); }
`;

_darkStyleForGame['ekonos'] = `
.player-name > a, .ekonos-scoreboard-label { color: #fff !important; }
`;

_darkStyleForGame['elawa'] = `
#bga-zoom-controls { filter: invert(0.7); }
.player-table { background: var(--dark-back); }
`;

_darkStyleForGame['elgrande'] = `
.eg_panel .cab, .log .cab, .selectMoveContainer .cab { filter: var(--highlight-min); }
`;

_darkStyleForGame['eriantys'] = `
#cog-icon { fill: var(--light-80); }
#settings-arrow { border-color: transparent transparent transparent var(--light-80); }
#settings-arrow:hover { border-color: transparent transparent transparent var(--light-70); }
.svg-zoom { filter: invert(0.7); }
.inner_player_board span { text-shadow: none; }
.tower { filter: var(--highlight-min); }
`;

_darkStyleForGame['euchre'] = `
.playertable.maker { background: #3f2128bf !important; }
.playertablename { text-shadow: none; }
`;

_darkStyleForGame['evergreen'] = `
.eve_inline-block { color: #000; }
`;

_darkStyleForGame['fairytrails'] = `
body { background: none !important; }
`;

_darkStyleForGame['farkle'] = `
#accumulated_score_wrap, #score_meter, #score_chart { background-color: var(--dark-back); color: var(--light-80); }
`;

_darkStyleForGame['farmclub'] = `
.fc_animal { filter: var(--highlight-min); }
`;

_darkStyleForGame['feastforodin'] = `
.ffo-icon-eye { filter: invert(0.7); }
#ffo-modal #ffo-modal-content { background-color: #00000066; }
.ffo-player-board-main .ffo-player-name { background-color: #00000080; }
.ffo-player-name > span:first-child, .ffo-player-name > span:last-child { color: #fff !important; }
`;

_darkStyleForGame['flamingpyramids'] = `
.py_fire_mode, .py_curse_mode { filter: var(--highlight); }
#py_fire_mode_txt, #py_curse_mode_txt { color: #fff; }
`;

_darkStyleForGame['fluxx'] = `
#pagesection_gameview .whiteblock { color: #000; }
#flx-zoom-controls { background-color: var(--dark-20) !important; }
#flx-zoom-out, #flx-zoom-in { filter: invert(0.7); }
`;

_darkStyleForGame['forbiddenisland'] = `
.side_title_wrapper { background: var(--dark-20); }
`;

_darkStyleForGame['forestshuffle'] = `
#help-mode-switch > label, .player_config_row > div:last-child > svg { filter: invert(0.7); }
`;

_darkStyleForGame['frenchtarot'] = `
#icon_first_player_in_panel { filter: invert(1); }
.#000 { text-shadow: -1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff; }
#score_table thead th, #score_table tfoot th, #score_table tfoot td, #score_table tbody tr:nth-of-type(2n)>* { background-color: var(--dark-20) !important; }
`;

_darkStyleForGame['fruitpicking'] = `
#market_board { color: #fff; }
.seed, .seed_log { filter: var(--highlight-min); }
`;

_darkStyleForGame['gangsta'] = `
#twodecks > div { background: none !important; }
.team { filter: var(--highlight-min); }
`;

_darkStyleForGame['gardennation'] = `
.player-board .counters .icon { filter: var(--highlight); }
#zoom-controls { filter: invert(0.7); }
#popin_gardennationHelpDialog { background-color: var(--dark-20); color: #fff; }
#help-popin h1 { color: #fff; }
`;

_darkStyleForGame['geekoutmasters'] = `
.counter { color: #fff; }
.counter_value[style^="color: rgb(0, 0, 0)"] { color: #fff !important; }
`;

_darkStyleForGame['getonboard'] = `
#zoom-controls { filter: invert(0.7); }
`;

_darkStyleForGame['getonboardparisrome'] = `
#zoom-controls { filter: invert(0.7); }
.player-board .personal-objective-wrapper .arrow { filter: invert(0.7); }
.first-player-token { filter: var(--highlight); }
`;

_darkStyleForGame['ghostathome'] = `
.ghostathome-name-000000, [style="color: rgb(0, 0, 0); background-color: rgba(255, 255, 255, 0.376);"] { text-shadow: -1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff; }
.ghostathome-name-0000ff, [style="color: rgb(0, 0, 255); background-color: rgba(0, 0, 0, 0.125);"] { color: #8080ff !important; }
.ghostathome-deck, .ghostathome-player-label { background-color: var(--dark-20) !important; }
#hand-label, #deck-label { color: #fff; }
#zoom-holder { filter: invert(0.7); }
`;

_darkStyleForGame['ginkgopolis'] = `
body { background: none !important; }
#generalSupplyPanel { background: var(--dark-back); }
#increaseZoomButton, #decreaseZoomButton { filter: invert(0.7); }
.zoneWrapper { background: var(--dark-20); }
`;

_darkStyleForGame['glow'] = `
#zoom-controls, .icon.footprint { filter: invert(0.7); }
.player-board #firstPlayerToken { filter: var(--highlight); }
#middle-band { background: #000; color: #fff; }
`;

_darkStyleForGame['greatwesterntrail'] = `
#gwt_markets { color: #fff; }
.player-area { background: #00000066; padding: 1em; }
.player-board-button-wrapper { top: 0.5em; }
#gwt_boards_area { gap: 0.5em; }
`;

_darkStyleForGame['goldblivion'] = `
html.darkmode .player-board.gb-player-panel-passed { background-color: #404347 !important; }
html.darkmode #player_boards .player-name a, html.darkmode .gb-area-player-title .player-name { background-color: transparent !important; }
html.darkmode .gb-area-player, html.darkmode .gb-detail-list { background-color: #272a2fa6; }
`;

_darkStyleForGame['golf'] = `
#overall-content { background: none !important; }
.playertablename { text-shadow: none; }
.table_color { background-color: var(--dark-20); color: #fff; }
`;

_darkStyleForGame['gomoku'] = `
.coord_label { color: #fff; }
`;

_darkStyleForGame['gonutsfordonuts'] = `
.gnfd_tooltip-text { color: #fff; }
.gnfd_tooltip-score { border: 1px solid #fff; border-radius: 12px; }
`;

_darkStyleForGame['goodcopbadcop'] = `
#board_area div[class^="player_name"] { background: var(--dark-30); border-radius: 8px; text-align: center; padding: 0.3em 0.5em; }
#board_area div[style^="color:#{PLAYER"] { display: none; }
`;

_darkStyleForGame['hadara'] = `
.had_player_p_icon, .had_coins { filter: var(--highlight-min); }
`;

_darkStyleForGame['haggis'] = `
.playertable_ff0000 { background-color: #800000cc !important; }
.playertable_008000 { background-color: #006600cc !important; }
.playertable_0000ff { background-color: #000080cc !important; }
`;

_darkStyleForGame['haiclue'] = `
.word { background: var(--dark-20); border: 1px solid #aaa; box-shadow: 2px 2px 2px rgba(255,255,255,.5); color: #fff; }
`;

_darkStyleForGame['hanabi'] = `
.bgagame-hanabi #hanabi_prefs .bgabutton_gray { background: var(--dark-10); color: var(--light-80); }
.bgagame-hanabi #hanabi_prefs .bgabutton_gray:hover { background: var(--dark-30); }
`;

_darkStyleForGame['hanamikoji'] = `
div#overall-content:not([style^="back"]) { color: #fff; }
`;

_darkStyleForGame['handandfoot'] = `
.card_type_icon { background-color: #fff; }
`;

_darkStyleForGame['hex'] = `
.hex_menu_toggle_icon { filter: var(--highlight-min); }
.hex_menu_content { background: var(--dark-back); color: #fff; }
`;

_darkStyleForGame['hive'] = `
body { background: none !important; }
`;

_darkStyleForGame['homesteaders'] = `
#top_texts { color: #fff; }
.log_train, .log_bid, .log_trade { filter: var(--highlight-min); }
.border_blue { border-color: #6666ff; }
.border_red { border-color: #ff3333; }
`;

_darkStyleForGame['icecoldicehockey'] = `
.hv_indicator { color: #fff; }
#period { color: #ccccff; }
`;

_darkStyleForGame['illustori'] = `
.to_translate { color: #fff; }
`;

_darkStyleForGame['incangold'] = `
#pagesection_gameview .whiteblock { background: var(--dark-10); }
#decksizetext { color: #fff; }
`;

_darkStyleForGame['innovation'] = `
.card_name { text-shadow: -1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff; }
#main_area .bgabutton { color: #000; }
.hand_container { background-color: transparent; }
.score_container, .achievement_container, #available_achievements_container, #available_special_achievements_container, #decks_and_title { color: #fff; }
`;

_darkStyleForGame['insert'] = `
.ring_set { background-color: transparent; }
`;

_darkStyleForGame['isleoftrainsallaboard'] = `
.passengersbag, .coaltype3, .oiltype3, .mypassengers, .mypassengersloaded { filter: drop-shadow(0.1vw 0.1vw 0.1vw #fff) !important; }
.mypassengerslog, .coaltype2, .oiltype2 { filter: var(--highlight-min); }
.board2 { color: #fff; }
#zoom-controls { filter: invert(0.7); }
`;

_darkStyleForGame['itsawonderfulworld'] = `
.avatar_active { filter: none; }
.iww-resources, .player_score { color: #000; }
.iww-tab { background-color: var(--dark-20); color: var(--light-80); }
.iww-tab.iww-tab-selected, .iww-tab:not(.iww-tab-selected):hover { background-color: #000; color: #fff; }
`;

_darkStyleForGame['iwari'] = `
.player-name { text-shadow: none; }
`;

_darkStyleForGame['jekyllvshide'] = `
span[style*="color:#161614"] { color: #868679 !important; }
`;

_darkStyleForGame['jumpdrive'] = `
.jdr-icon, .jdr-resource { filter: var(--highlight-min); }
`;

_darkStyleForGame['justone'] = `
#overall-content, #left-side-wrapper { background: inherit !important; }
#card-mystery-header, #card-guess-header { color: #fff; }
.left-name, .right-name { background: var(--dark-20); border-radius: 8px; padding: 0.3em 0.5em; }
`;

_darkStyleForGame['k2'] = `
#k2_right_column .whiteblock h3 { color: #fff; }
.climber_icon { filter: var(--highlight-min); }
`;

_darkStyleForGame['kahuna'] = `
#round, #card_pool_wrapper { color: #fff; }
`;

_darkStyleForGame['keyflower'] = `
.player-name { text-shadow: none; }
.resource, .worker_mini { filter: var(--highlight-min); }
`;

_darkStyleForGame['kingdombuilder'] = `
.player-panel .player-settlements .player-settlements-counter { color: #fff !important; }
`;

_darkStyleForGame['kingsguild'] = `
#player_boards .resource, #logs .resource, #player_boards .cellcount, #player_boards .sigil { filter: var(--highlight-min); }
`;

_darkStyleForGame['kingoftokyo'] = `
#active-expansions-button { background: #737373; }
`;

_darkStyleForGame['klaverjassen'] = `
.playerTables__roemScoredValue { color: #6666ff; }
.infobutton, .infotitle { color: #999999; }
table.tableScore td, .quickRefNote { color: #b3b3b3; }
`;

_darkStyleForGame['knarr'] = `
.player-table { background: var(--dark-back); }
.player-crew-cards, #bga-zoom-controls { filter: invert(0.7); }
#popin_bgaHelpDialog { background: var(--dark-20); color: #fff; }
.bga-help_unfolded-content { background: var(--dark-20); }
.color-help-unfolded-content .label, .player-board.spectator-mode { color: #fff; }
`;

_darkStyleForGame['krosmasterarena'] = `
.pageheader { background-color: var(--dark-20); }
.minidieface { filter: invert(1); }
`;

_darkStyleForGame['lagranja'] = `
.playerFarm > div:first-child > span:first-child { background-color: transparent !important; }
`;

_darkStyleForGame['lama'] = `
#deckCount { color: #fff; }
`;

_darkStyleForGame['legendraiders'] = `
#tiles_stack_counter { color: var(--light-100); }
`;

_darkStyleForGame['lettertycoon'] = `
.lettertycoon_area { background: var(--dark-back); }
.lettertycoon_area .to_translate, .lettertycoon_deck_info { color: #fff !important; }
`;

_darkStyleForGame['lewisclark'] = `
.player-name, .player_board_inner, .player_score { background-color: transparent; }
`;

_darkStyleForGame['libertalia'] = `
.discarded { filter: invert(0.7); }
`;

_darkStyleForGame['lielow'] = `
.lielow-name-with-bg-000000  { text-shadow: -1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff; }
.lielow-name-with-bg-ffffff { background-color: transparent; }
`;

_darkStyleForGame['lineit'] = `
.player-table { background: var(--dark-back) !important; }
.name-wrapper { background: var(--dark-20) !important; }
.player-scored-card, .jackpot-icon { filter: var(--highlight-min); }
`;

_darkStyleForGame['liverpoolrummy'] = `
#handNumber { color: #fff !important; }
#redTarget, .prepbox, .prepjoker, .downWhite { color: var(--light-70) !important; }
html.darkpanel .player-board.playerBoardBuyer { background: #381e1e !important; }
html.darkpanel .player-board.playerWentDown { background: #1a3d22 !important; }
`;

_darkStyleForGame['livingforest'] = `
.icon_fragment { filter: invert(1); }
`;

_darkStyleForGame['locomomo'] = `
#ebd-body { background-image: inherit; background-size: auto; }
.loc_player-header { background-color: var(--dark-back); }
`;

_darkStyleForGame['lookatthestars'] = `
#cards #shapes .pile-wrapper .pile:empty { border: 1px dashed #ccc; }
#zoom-controls { filter: invert(0.7); }
#popin_lookatthestarsHelpDialog { background: var(--dark-20); color: #fff; }
`;

_darkStyleForGame['lostcities'] = `
#round_count, #deck_count { color: #fff !important; }
`;

_darkStyleForGame['luckynumbers'] = `
.playertable { background-color: var(--dark-back); }
`;

_darkStyleForGame['lumen'] = `
.player-board.spectator-mode * { background: var(--dark-20) !important; }
#spectatorbox { background-color: var(--dark-20) !important; }
#zoom-wrapper #map-controls button { background-color: var(--light-70) !important; border-color: var(--dark-40); }
#zoom-wrapper #map-controls button.active { background-color: #fff !important; border-color: #4871b6; }
#popin_lumenHelpDialog { background-color: var(--dark-20); color: #fff; }
#help-popin h1 { color: #fff; }
`;

_darkStyleForGame['machiavelli'] = `
font[color="blue"] { color: #8080ff !important; }
font[color="#000"] { text-shadow: -1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff; }
font[color="red"] { color: #ff3333 !important; }
`;

_darkStyleForGame['marcopolo'] = `
.piece { filter: var(--highlight); }
.small_piece { filter: var(--highlight-min); }
`;

_darkStyleForGame['marcopolotwo'] = `
#characterSelectionDescription { background-color: var(--dark-20) !important; }
.piece { filter: var(--highlight); }
.small_piece { filter: var(--highlight-min); }
`;

_darkStyleForGame['martiandice'] = `
.turn-order { text-shadow: none; }
`;

_darkStyleForGame['memoir'] = `
#clipboard-button { filter: invert(0.7); }
`;

_darkStyleForGame['microdojo'] = `
.doubleempty { color: #fff; }
`;

_darkStyleForGame['mindup'] = `
.darkmode .spectator-mode * { background: transparent !important; }
#round-counter-row #round-counter-block { background: var(--dark-20); text-shadow: none; }
.player-table, .player-table .name-wrapper { background-color: var(--dark-20); }
#table-center .slot .player-block { background: var(--dark-20); }
`;

_darkStyleForGame['monsterfactory'] = `
body { background: none; }
#page-content { color: #fff; }
.scrollerClass { border-color: var(--dark-20); background-color: var(--dark-back); }
.otherPlayerPossibleMove,.possibleMove { filter: invert(0.7); }
`;

_darkStyleForGame['mow'] = `
#gamezone #playertables { background-color: #2a3d10; }
#gamezone #playertables .playertable { background-color: var(--dark-20); }
#direction-text { color: #fff; }
#direction-play-symbol { filter: invert(1); }
.counters .counter-icon.card, .counters .counter-icon.farmer-card { filter: var(--highlight-min); }
`;

_darkStyleForGame['mrjack'] = `
#character-ability { background: var(--dark-20); color: #fff; border: 1px solid #fff; }
`;

_darkStyleForGame['mue'] = `
#mue_gametarget { color: #fff; }
.mue_discard_btn { color: var(--light-70); }
.mue_isinchiefteam { background-color: #141414e6; }
.mue_isinmyteam,.mue_isinviceteam { background-color: #001a00e6; }
.mue_isinotherteam { background-color: #290000e6; }
.mue_infotable { background-color: #330; color: white; }
.mue_infotablename { color: white !important; }
`;

_darkStyleForGame['mycity'] = `
.cty_header_extra { background-color: var(--dark-back); color: #fff; }
.cty_intro_header { filter: invert(1); }
.cty_header_extra h2, .cty_header_extra h3, .cty_header_extra h4 { color: #fff; }
.cty_intro { background-color: #000; color: #e87a9a; }
.cty_intro_rankings { border: 2px solid #e87a9a; }
.cty_intro_button { background-color: #e87a9a; border: 2px solid #e87a9a; }
.cty_intro_button:hover { background-color: #fff; color: #e87a9a; }
.cty_header_warning { background-color: var(--dark-20); color: #fff; }
.cty_extra_button a { color: #fff; }
.cty_extra_button a:hover { color: var(--violet-80); }
`;

_darkStyleForGame['myshelfie'] = `
#settings-icon { filter: invert(1); }
#board-scale { filter: grayscale(1); }
`;

_darkStyleForGame['nextstationtokyo'] = `
#ebd-body { background-image: none !important; }
`;

_darkStyleForGame['nidavellir'] = `
#turn-counter-holder, #layout-mode { filter: invert(0.7); }
.card-class-ranks, .card-class-score, .rank { filter: invert(1); }
#player-boards > div { background: var(--dark-20); border-radius: 8px; }
.player-board-name { background-color: var(--dark-30) !important; }
`;

_darkStyleForGame['ninetynine'] = `
#decrev_player_name, .bgann_dealerindicator { color: #fff !important; }
.bgann_firstplayer { border: 2px dashed var(--light-80); }
.bgann_icon { filter: var(--highlight-min); }
`;

_darkStyleForGame['noah'] = `
#zoom-controls { filter: invert(0.7); }
.table-counter-wrapper, #help-popin h1 { color: #fff; }
#popin_noahHelpDialog { background: #0b2e41; color: #fff; }
`;

_darkStyleForGame['noirkvi'] = `
.shiftArrow { filter: invert(0.7); }
`;

_darkStyleForGame['noneshallpass'] = `
#zoomin, #zoomout { background-color: transparent; box-shadow: none; filter: invert(0.7); }
`;

_darkStyleForGame['notalone'] = `
.player-board { background: transparent !important; }
.player-board.selectable .player_board_inner { border-color: green !important; }
.player-board.selectable .player_board_inner:hover { border-color: lime !important; }
`;

_darkStyleForGame['novaluna'] = `
.disc { color: #000; }
`;

_darkStyleForGame['numberdrop'] = `
div.preference_choice:has(> div > div > select#preference_control_100) { display: none; }
div.preference_choice:has(> div > div > select#preference_fontrol_100) { display: none; }
`;

_styleForGame['numberdrop'] = `
#darkmode-switch { display: none; }
`;

_darkStyleForGame['obsession'] = `
#zoomIn, #zoomOut { filter: invert(1); }
#pagesection_gameview { color: #fff; }
#pagesection_gameview .playerName { background: var(--dark-20); padding: 0.5em 1em; border-radius: 8px; margin-bottom: 0.5em; }
`;

_styleForGame['offtherails'] = `
#jewel_bag, .otr_cart_button, .otr_cart_ready { filter: var(--highlight); }
.otr_mission_counter_icon { filter: var(--highlight-min); }
`;

_darkStyleForGame['ohhell'] = `
#table .table_player_name { background-color: var(--dark-20); }
`;

_darkStyleForGame['painttheroses'] = `
#overall-content[style^="background"] { background-image: none !important; background-color: #1f6a6c !important; }
`;

_darkStyleForGame['pandemic'] = `
.player-board-pandemic__title, .player-name { text-shadow: -1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff; }
`;

_darkStyleForGame['papayoo'] = `
#pagesection_gameview .whiteblock { background: none; }
`;

_darkStyleForGame['patchwork'] = `
#player_boards .micon { filter: invert(1); }
`;

_darkStyleForGame['photosynthesis'] = `
.psy_toolbtn, .psy_overlay_button { color: #fff; background: var(--dark-20); box-shadow: none; filter: drop-shadow(2px 2px 3px #fff); }
.psy_suncounter, .psy_token { color: #000; box-shadow: none; filter: drop-shadow(2px 2px 3px #fff); }
#psy_turnindicator { color: #fff; }
.psy_log_icon, .player_score .fa-leaf { filter: var(--highlight-min); }
div[id^="psy_playerboard_"] .psy_playerboard_playername { background: var(--dark-20); text-shadow: none; }
`;

_darkStyleForGame['pi'] = `
.whiteblock h3, .whiteblock h4, .whiteblock h5 { color: #fff; text-shadow: none; }
.token, .sp_marker { filter: var(--highlight); }
.disc30_yellow { background-position: -170px 0px; }
.disc30_purple {background-position: -228px 0px; }
.disc30_red { background-position: -152px 0px; }
`;

_darkStyleForGame['pingimus'] = `
.player-name { text-shadow: none; }
`;

_darkStyleForGame['potionexplosion'] = `
.area_label, .player-name { text-shadow: none; }
`;

_darkStyleForGame['president'] = `
.icon20, .iconBeggar, .iconCitizen, .iconPresident, .iconPeasant, .iconPrimeMinister { filter: invert(1); }
`;

_darkStyleForGame['puertorico'] = `
#buildings, #plantations { background: var(--dark-back); color: #fff; }
.tiles_label { color: #fff; }
.small_building_placeholder, .big_building_placeholder { background-color: #e6d49c; }
`;

_darkStyleForGame['pugsinmugs'] = `
.bigcard { box-shadow: 5px 5px 10px 2px #aaa; }
`;

_darkStyleForGame['qawale'] = `
.qaw_miniboard { border: 2px solid #897272; }
`;

_darkStyleForGame['quantum'] = `
#gambits, #commands { background-color: var(--dark-back); color: #fff; }
#mapName { color: #fff; }
`;

_darkStyleForGame['quetzal'] = `
.custom-player-area .player-meeple-recap { filter: var(--highlight-min); }
.player-area { background-color: var(--dark-back); color:#fff; }
.player-meeple-zone-wrapper { background-color: var(--dark-20); }
.meeple { filter: var(--drop-shadow); }
`;

_darkStyleForGame['quibbles'] = `
.quibbles #quibbles-ui-row-2 .whiteblock { background-color: #471e48; }
#bga-zoom-controls { filter: invert(0.7); }
`;

_darkStyleForGame['quirkyquarks'] = `
.QQ-Phase, .QQ-Round { color: #ebb073; background-color: transparent; }
`;

_darkStyleForGame['quoridor'] = `
.objective { filter: var(--highlight); }
`;

_darkStyleForGame['railroadink'] = `
#infrastructure { color: #fff; }
#all-players h2 { background: var(--dark-20); padding-left: 1em; border-radius: 8px; }
`;

_darkStyleForGame['railwaysoftheworld'] = `
.mm_money, .mm_income, .mm_bond, .mm_engine, .mm_completed_links, .mm_consecutive_links, .mm_connected_cities, #zoom_plus, #zoom_minus { filter: invert(1); }
#cityNameShow, #majorLinesShow, #allOpCardsShow, #rulesShow { background-color: var(--dark-30) !important; }
#hideShowOpCards { padding:0.3em 0em; margin: 0.5em 0em; cursor: pointer; }
.all_cards_wrapper { background: var(--dark-back); color: #fff; }
.all_cards_wrapper > h3 { padding-left: 0.5em; }
.stockitem { color: #000; }
 `;

_darkStyleForGame['rainforest'] = `
 .playerPanel p { color: #fff; }
 .notif_species { filter: var(--highlight-min); }
 `;

_darkStyleForGame['rallymangt'] = `
.warningCounterIcon { filter: invert(1); }
`;

_darkStyleForGame['rauha'] = `
#help-mode-switch { filter: invert(1); }
#round-counter-wrapper { color: #fff !important; }
#player_config #round-counter-wrapper { background: var(--dark-20); font-weight: normal; }
#player_config #round-phase { background: var(--dark-30); color: #fff; }
g.fa-group { color: #000; }
.rauha-board .player-name { background: var(--dark-20); border: none; font-weight: normal; }
`;

_darkStyleForGame['regicide'] = `
.hand_card_icon.empty { filter: invert(1); }
.player-board.transparent { background-color: #272a2fcc !important; }
.player-board.highlight_panel { background-color: rgba(80,80,80,.6) !important; }
.player-board.unselectable_panel { background-color: rgba(255,0,0,.3) !important; }
.player-board.selected_panel { background-color: #0033004d !important; }
`;

_darkStyleForGame['resarcana'] = `
.res_emptydiscardpile { border: 1px dotted #aaa; }
`;

_darkStyleForGame['riftvalleyreserve'] = `
.riftvalleyreserve-name-272c29 { text-shadow: -1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff; }
.rvr-icon-element[data-color="272c29"][data-type=stop] { background-color: #fff; border-radius: 18px; }
.rvr-icon-backpack, .rvr-tent-display { filter: var(--highlight-min); }
`;

_darkStyleForGame['rollandbump'] = `
.rnb_cardsnb { color: #ddd; }
.rnb_player { background: var(--dark-back); }
.rnb_mininb { color: #fff; }
.rnb_nocard { border: 2px solid #fff; }
#rnb_rewards { color: #fff; }
.rnb_boardcard, .rnb_logcard { filter: var(--highlight); }
`;

_darkStyleForGame['rollforthegalaxy'] = `
.imgtext { filter: var(--highlight-min); }
.tile_title { color: #000; }
`;

_styleForGame['rollingpins'] = `
.upperrightmenu_item { right: 106px; top: -28px; }
`;

_darkStyleForGame['rollingpins'] = `
.doubleempty { color: #fff; }
.freeballs, .turnnum { filter: var(--highlight-min); box-shadow: none; }
`;

_darkStyleForGame['rolltothetopjourneys'] = `
.dice_area_active, .dice_area_inactive { background-color: var(--dark-back); color: #fff; }
.first_player { filter: var(--highlight-min); }
`;

_darkStyleForGame['russianrailroads'] = `
.player-name, .player_score { background-color: var(--dark-20); }
.nameslot { width: auto; }
.nameslot > h3 { background-color: var(--dark-20); padding: 0.5em 1em; border-radius: 8px; }
.meepleable, .industrymarker, .lock, .rail, .advantage, .ruble { filter: var(--highlight); }
`;

_darkStyleForGame['saboteur'] = `
.saboteur_cell.default_cell_bg:empty { filter: invert(1); }
`;

_darkStyleForGame['sagani'] = `
body { background: none; }
.sag_goto, #sag-buttons { filter: invert(1); }
.sag_map-container { background: var(--dark-back); }
.sag_piece { filter: var(--highlight); }
`;

_darkStyleForGame['saintpetersburg'] = `
.stp_icon_ruble { filter: invert(1); }
`;

_darkStyleForGame['sapiens'] = `
.player-name { text-shadow: none; }
#startplayer { filter: var(--highlight); }
`;

_darkStyleForGame['sahwari'] = `
.playerCaravanZone { background-color: #3d3229; }
.playerCamelZone:not(:empty) { background-color: #2a0f09; }
.player_board_content .token { filter: var(--drop-shadow); }
`;

_darkStyleForGame['scriptoria'] = `
#availableLecterns { background-color: var(--dark-back); }
.pupitrePlayerContainer h2 { color: #fff; }
`;

_darkStyleForGame['seasaltpaper'] = `
#discard-pick, .player-table { background: var(--dark-back); }
.player-table .name-wrapper { background: var(--dark-20); }
#popin_seasaltpaperHelpDialog { background: var(--dark-20); color: #fff; }
`;

_darkStyleForGame['seasons'] = `
#player_boards .icon_cristal { filter: invert(0.7); }
#player_boards .invocation_level, #player_boards .hand, #help-mode-switch  { filter: invert(0.7); }
`;

_darkStyleForGame['sechsnimmt'] = `
.card_played { background: none var(--dark-40); }
`;

_darkStyleForGame['seikatsu'] = `
.table_bordered { border: 3px ridge #999; }
.flower_line_icon, .rotate_icon { filter: invert(0.7); }
`;

_darkStyleForGame['sevenwonders'] = `
.player_board_wrap { background: #00000090; }
span.tcoin { color: var(--light-80); }
#discard_count, #trees h3 { color: var(--light-80); }
`;

_darkStyleForGame['sevenwondersarchitects'] = `
body { background: none !important; }
.player-board { background: var(--dark-30) !important; }
.player-board.stw_activepl { background: var(--dark-40) !important; }
#centralaround.stw_emptypile { background: #80808099; }
`;

_darkStyleForGame['sevenwondersduel'] = `
.card_outline.science_progress, .card_outline:empty, .progress_token_outline { box-shadow: inset 0 0 calc(var(--scale)*4px) calc(var(--scale)*1px) #ffffff80; }
.end_game_player_name, #game_play_area .whiteblock h3, .science_progress { text-shadow: none; }
.end_game_blue { color: #002f4dab; }
.end_game_green, .end_game_progresstokens { color: #00b35cab; }
.end_game_purple { color: #9c82b0ab; }
.end_game_military { color: #db2433ab; }
`;

_darkStyleForGame['shiftingstones'] = `
.doubleempty, .empty, #deck, #disc, #mycard { color: #fff !important; }
.box_wrap { padding: 16px 10px 0 10px; }
`;

_darkStyleForGame['sixtyone'] = `
.sxt_dice_area { background-color: var(--dark-20); border: 3px solid #396138; }
.sxt_dice_area_wanted_color { background-color: #193418; }
.sxt_player_name { background-color: var(--dark-20); }
`;

_darkStyleForGame['skat'] = `
.card_icon { filter: var(--highlight-min); }
`;

_darkStyleForGame['sobek'] = `
.whiteblock_title { text-shadow: none; background-color: var(--dark-20); padding: 0.5em 1em; border-radius: 8px; }
.fixed_player_title { height: 32px; }
`;

_darkStyleForGame['solo'] = `
#howto2, #helptext2 { color: var(--light-80); }
`;

_darkStyleForGame['spaceempires'] = `
#pagemaintitletext { background: none !important; }
#right-side-second-part { background: transparent !important; }
#logs .log .roundedbox { background: rgba(0,0,0,.5); color: #fff; }
`;

_darkStyleForGame['spacestationphoenix'] = `
.player-board { background: linear-gradient(rgba(245,230,255,0.2),rgba(247,235,255,0.25),rgba(250,240,255,.3)); }
`;

_darkStyleForGame['spades'] = `
.card-name-color--1, .card-name-color--3 { text-shadow: -1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff; }
`;

_darkStyleForGame['splashdown'] = `
.sd_playerinfo_icon, #resetzoom, #zoomplus, #zoomminus, #zoomfocus { filter: var(--highlight-min); }
#nav_container { background-color: var(--dark-20); color: var(--light-70); }
`;

_darkStyleForGame['splits'] = `
body { background: none !important; }
`;

_darkStyleForGame['starfluxx'] = `
#flx-zoom-controls { background-color: var(--dark-20) !important; }
#flx-zoom-out, #flx-zoom-in { filter: invert(0.7); }
#pagesection_gameview .whiteblock { color: #000; }
.flx-table .flx-deck .flx-deck-wrap .flx-toggle, .flx-table .flx-deck .flx-deck-wrap .flx-card-count
{ color: #fff; background: var(--dark-back); }
`;

_darkStyleForGame['stockpile'] = `
#zoom-out, #zoom-in { filter: invert(0.7); }
#card_marketback_val { color: #fff; }
.containerbackground { background-color: var(--dark-20); }
.portfolioval { color: #fff; }
.titleicon { filter: var(--highlight); }
`;

_darkStyleForGame['stoneage'] = `
.sta_boardBuildingCounter, .sta_boardCardCounter { color: #fff; }
#sta_adjustZoom,#sta_zoomIn,#sta_zoomOut { filter: invert(0.7) !important; }
#sta_adjustZoom:hover,#sta_zoomIn:hover,#sta_zoomOut:hover { filter: invert(1) drop-shadow(0 0 3px #fff) !important; }
`;

_darkStyleForGame['strands'] = `
.strands-name-000000, .strands-num-1, .strands-num-2, .strands-num-3, .strands-num-4, .strands-num-5, .strands-num-6 { text-shadow: -1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff; }
.hex-alt-colors .hex-tile[data-hex="6"] { filter: contrast(0); }
`;

_darkStyleForGame['streets'] = `
[style*="color:#ffff00"], [style*="color: #ffff00"], [style*="color:#ffffff"], [style*="color: #ffffff"] { text-shadow:none!important; }
.tbp-ownerToken { filter: var(--highlight-min); }
#tbp-board-outer { background: var(--dark-back); }
`;

_darkStyleForGame['sushigo'] = `
.block_title { background-image: none; background-color: var(--dark-20); }
`;

_darkStyleForGame['sushigoparty'] = `
.block_title { background-image: none; background-color: var(--dark-20); }
#sushigoparty_menu_wrapper { background: var(--dark-back); color: #fff; }
#sushigoparty_menu_wrapper>h1>span { color: var(--light-80); }
`;

_darkStyleForGame['takenoko'] = `
#takenoko_actionbar { background-color: var(--dark-back); background-image: none; }
#take_zoom_icon { filter: invert(0.7); }
`;

_darkStyleForGame['talon'] = `
.TALONlogBattle, .TALONlogRound, .TALONlogPlayer { background-color: transparent; }
`;

_darkStyleForGame['tapestry'] = `
#breadcrumbs { color: #fff; background: #1d2023; }
#player_board_config { background-color: #272a2f !important; }
#settings-controls-container .row-data .row-label { color: #fff; }
#player_config #player_config_row { filter: invert(1); }
.playerArea { background-color: #2d2d2d80; }
`;

_darkStyleForGame['targi'] = `
h3 > span[style="color:#0000ff; background-color: #;"] { color: #8080ff !important; background-color: var(--dark-20); padding: 0.5em 1em; border-radius: 8px; }
h3 > span[style="color:#ffffff; background-color: #bbbbbb;"] { background-color: var(--dark-20) !important; padding: 0.5em 1em; border-radius: 8px; }
.tar_ware_board { filter: var(--highlight-min); }
`;

_darkStyleForGame['teotihuacan'] = `
.cc_counter { background-color: #ffffff33; }
.token24 { filter: var(--highlight-min); }
`;

_darkStyleForGame['terramystica'] = `
.tmlogs_icon div, .tm_panel_icon, .tm_panel_icon2 { filter: var(--highlight-min); }
.priests_collection { filter: var(--highlight); }
#player_boards .priest { background-image: none; }
.faction_selection_item, .player_faction { text-shadow: none; color: #fff; }
`;

_darkStyleForGame['thattimeyoukilledme'] = `
.tty-pawn-000000 { filter: var(--highlight-min); }
`;

_darkStyleForGame['thatslife'] = `
#player_stacks, #own_tiles_container { background-color: var(--dark-back); }
#own_tiles_0 { background-color: var(--dark-20); color: #fff; }
`;

_darkStyleForGame['theboss'] = `
.stockitem { filter: var(--highlight-min); }
`;

_darkStyleForGame['thecrew'] = `
#logs span.card-value.#000 { text-shadow: -1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff; }
#logs span.card-value { padding-right: 0.2em; }
#logs span.logicon.#000 { filter: invert(1); }
`;

_darkStyleForGame['thecrewdeepsea'] = `
#help-mode-switch > label { filter: invert(0.7); }
#logs .notif_startNewMission > div { color: #000 !important; }
#logs span.card-value.#000 { text-shadow: -1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff; }
#logs span.logicon.#000 { background-color: #fff; }
`;

_darkStyleForGame['thenumber'] = `
.tn-miniboard-digit { background: var(--dark-40); }
.tn-miniboard-digit-closed { background: #000; color: #000; }
`;

_darkStyleForGame['thirteenclues'] = `
#tcGameLogTable th { color: #05f; }
.tableWindow td { color: #8585ad; }
`;

_darkStyleForGame['throughtheages'] = `
.firstplayernotice { color: #fff; }
`;

_darkStyleForGame['throughtheagesnewstory'] = `
.firstplayernotice { color: #fff; }
`;

_darkStyleForGame['turnthetide'] = `
#rule_6p { background: #665700; color: #fff; }
.playercards { background: var(--dark-back); }
#tide_wrap { color: #fff; }
`;

_darkStyleForGame['thurnandtaxis'] = `
#help div div { filter: invert(1); }
#help h3, .gameAreaContainer h3, #carriages h3 { color: #c0c1d5; }
`;

_darkStyleForGame['thebuilders'] = `
#pagesection_gameview .whiteblock { color: #000; }
`;

_darkStyleForGame['thebuildersantiquity'] = `
#pagesection_gameview .whiteblock { color: #000; }
#universities { background: var(--dark-20); }
`;

_darkStyleForGame['thegnomesofzavandor'] = `
.alchemister, .gnomunculus, .gold, .miningjolly, .hoovermatic3, .hoovermatic4, .diamond, .emeromobile5,
.ruby, .miningsapphire, .sapphire, .emerald, .miningemerald, .miningdiamondn, .miningruby  { filter: var(--highlight-min); }
`;

_darkStyleForGame['thirtyone'] = `
.closer { background-color: var(--dark-40) !important; }
.name_shadow { text-shadow: none; }
`;

_darkStyleForGame['throneandthegrail'] = `
span[style^="color:#3a371e"] { text-shadow: -1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff !important; }
.player_can_take_cards, .player_cannot_take_cards { background-color: transparent; }
.sprite-first_player_marker { border-radius: 48px; }
`;

_darkStyleForGame['tichu'] = `
#pagesection_gameview .whiteblock .playertablename[style="color:#000000"] { text-shadow: -1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff; }
#currentTrickDiv { background: var(--dark-back); padding: 0.3em 0.5em; border-radius: 6px; }
#pagesection_gameview .whiteblock.lastComboPlayer { background-color: rgb(183 183 87 / 70%); }
#pagesection_gameview .whiteblock.disabled:not(.lastComboPlayer) { background-color: hsla(0,0%,45%,.7); }
.grandtichublack, .tichublack { filter: var(--highlight-max); }
#buttons { background: var(--dark-back); color: #fff; }
`;

_darkStyleForGame['tictacmatch'] = `
.card--empty { box-shadow: inset 0 0 10px #d79781; }
#settings-controls-container .row-data .row-label { color: #fff; }
`;

_darkStyleForGame['tigriseuphrates'] = `
.log .point, .mini_monument_lower { filter: var(--highlight-min); }
.player_leader_wheel { filter: var(--highlight); }
`;

_darkStyleForGame['timelinetwist'] = `
.tlt_zoom-button-icon { filter: invert(0.7); }
`;

_darkStyleForGame['tinyepicdefenders'] = `
#settings, #TED_zoom_plus, #TED_zoom_minus, .TED-inline-icon { filter: invert(1); }
span[style^="color: #444444;"] { color: #aaaaaa !important; }
`;

_darkStyleForGame['tiwanaku'] = `
#page-content { background-image: none; }
#left-side-wrapper { background-color: transparent; }
.playerPawnsStack { background-color: var(--dark-back); }
.offering_icon { border: 1px solid #fff; border-radius: 20px; }
#externalBoard { margin-top: 1em; }
`;

_darkStyleForGame['tobago'] = `
#player_hand { color: #fff; }
`;

_darkStyleForGame['toc'] = `
#icon_first_player, #checkmark { filter: invert(1); }
.field { border-color: #c9ab69; }
`;

_darkStyleForGame['tranquility'] = `
.tqt_draw_count { filter: invert(1); }
`;

_darkStyleForGame['tranquilitytheascent'] = `
#overall-content { background: none !important; }
`;

_darkStyleForGame['trio'] = `
.handPlayerName {
  background: var(--dark-20); padding: 0.3em 2em; border-radius: 8px; color: #fff;
  margin-top: 10px; width: auto; flex-grow: 0; height: 22px;
}
.playerLabelContainer { justify-content: space-between; }
.playerLabelContainer .bgabutton[style="display: none;"] { display: block !important; visibility: hidden; }
`;

_darkStyleForGame['troyes'] = `
.t_icon { filter: var(--highlight-min); }
`;

_darkStyleForGame['troyesdice'] = `
.counter_icon.influence_icon, .log_resource_icon.influence_icon, .counter_icon.denier_icon,
.counter_icon.deniers_icon, .log_resource_icon.denier_icon, .log_resource_icon.deniers_icon,
.counter_icon.knowledge_icon, .log_resource_icon.knowledge_icon { filter: var(--highlight-min); }
`;


_darkStyleForGame['tucano'] = `
.tuc_header { background-color: #000 !important; }
.tuc_linenblock { background-color: var(--dark-back); }
`;

_darkStyleForGame['turingmachine'] = `
#notepad { background: var(--dark-20); color: #fff }
#guessnb { background: var(--dark-20); color: #fff }
.selectable { background-color: #00000055; }
`;

_darkStyleForGame['turncoats'] = `
text { fill: #fff; }
`;

_darkStyleForGame['ultimaterailroads'] = `
.player-name, .player_board_inner, .player_score { background-color: transparent; }
`;

_darkStyleForGame['uptown'] = `
.uptown_player_name {color: #000; }
`;

_darkStyleForGame['vektorace'] = `
body { background: none !important; }
#map_container { background: var(--dark-20); border: 10px solid #000; }
.lapIcon, .standingsIcon { filter: var(--highlight); }
`;

_darkStyleForGame['viamagica'] = `
.vmg_portal_icon, .vmg_yellow_icon, .vmg_purple_icon, .vmg_green_icon, .vmg_blue_icon { filter: var(--highlight-min); }
#vmg_portalstockrow, .vmg_playerportalactiverow { background: var(--dark-20); }
.vmg_playerportaldonerow { background: var(--dark-40); }
`;

_darkStyleForGame['viticulture'] = `
#player_boards .cc_counter, .playerboard_row_header .cc_counter { color: #000; }
#turn_header { background-color: var(--dark-20); color: #fff; }
#pagesection_gameview #board-row .whiteblock { color: #000; }
.player-board { background: var(--dark-20) !important; }
.player-board.vit_passed,.playerboard_row.vit_passed { background: var(--dark-40) !important; }
.expandabletoggle:active, .expandabletoggle:hover, .expandabletoggle:link, .expandabletoggle:visited { color: #fff!important; }
.player_last_turn { background-color: transparent !important; }
`;

_darkStyleForGame['vultureculture'] = `
#cards_on_table, #score_table, .other_hand { background-color: var(--dark-20); }
#my_hand { background-color: rgb(255 127 80 / 20%); }
#other_hands { border: 3px solid var(--dark-20); background-color: var(--dark-back); }
.heading {  background-color: transparent; color: #fff; }
`;

_darkStyleForGame['welcometo'] = `
#player_boards .houses-status > svg { filter: invert(1); }
#player_boards .houses-status > div, #player_boards .refusal-status > div { color: #fff; }
#plan-cards-container, #construction-cards-container { background: var(--dark-back); }
`;

_darkStyleForGame['welcometonewlasvegas'] = `
#page-content h3 { color: #fff; }
`;

_darkStyleForGame['wizard'] = `
.wizLogColor { color: #000; }
`;

_darkStyleForGame['warchest'] = `
#team_board_id { background-color: var(--dark-20) !important; }
`;

_darkStyleForGame['wingspan'] = `
#spectatorbox { background-color: var(--dark-20) !important; }
.player_board_content, .wsp_playerboard_card_icon { color: #000; }
#feeder_outside, #feeder_outside > div { filter: invert(1); }
`;

_darkStyleForGame['wizardsgrimoire'] = `
#pagesection_gameview .whiteblock, .player-table .wg-health { color: #000; }
.i-mana-x { filter: var(--highlight); }
.player_small_board .hand-icon-wrapper .hand-icon { filter: invert(1); }
`;

_darkStyleForGame['yatzy'] = `
.PointLine > th, .PointLine > td { color: #fff; }
.PointLine > td.possibleCells { color: gray; }
`;

_darkStyleForGame['yokai'] = `
body { background: none; }
#hints_wrap { color: #fff; }
`;

_darkStyleForGame['yokaiseptet'] = `
#overall-content { background: none !important; }
.playertablename { text-shadow: none; }
`;

_darkStyleForGame['yokohama'] = `
#eog_triggers > div:first-child { background-color: var(--dark-20) !important; }
.mngt_button { color-scheme: dark; background-color: var(--dark-20); }
`;

_darkStyleForGame['zefiria'] = `
.doubleempty { color: #fff; }
.blueact { filter: invert(0.7); }
div[id^="plname"]:not(:empty) { background-color: var(--dark-back); }
`;

_darkStyleForGame['zuuli'] = `
.doubleempty { color: #fff; }
`;

export const darkStyleForGame = _darkStyleForGame;
export const styleForGame = _styleForGame;
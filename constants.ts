import type { AppDefinition } from './types';

const ICONS = {
    HOME: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>`,
    CALCULATOR: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 3h.008v.008H8.25v-.008Zm0 3h.008v.008H8.25v-.008Zm3-6h.008v.008H11.25v-.008Zm0 3h.008v.008H11.25v-.008Zm0 3h.008v.008H11.25v-.008Zm3-6h.008v.008H14.25v-.008Zm0 3h.008v.008H14.25v-.008Zm0 3h.008v.008H14.25v-.008ZM6 21h12a2.25 2.25 0 0 0 2.25-2.25V5.25A2.25 2.25 0 0 0 18 3H6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 6 21Z" /></svg>`,
    SETTINGS: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-1.007 1.11-.95.542.057 1.007.56 1.11 1.11.09.542-.258 1.007-.803 1.255a2.5 2.5 0 0 1-1.442-1.442ZM12 2.25a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75H12ZM12 15a2.25 2.25 0 0 1-2.25-2.25V9a2.25 2.25 0 0 1 2.25-2.25c1.153 0 2.162.814 2.242 1.944a2.25 2.25 0 0 1-2.242 2.556Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Zm0 0a8.949 8.949 0 0 0 5.46-1.855 8.949 8.949 0 0 0-1.855-5.46m-3.605 0a8.949 8.949 0 0 0-5.46 1.855m0 0a8.949 8.949 0 0 0 1.855 5.46m3.605 0a8.949 8.949 0 0 0 5.46-1.855m0 0a8.949 8.949 0 0 0-1.855-5.46m-3.605 0a8.949 8.949 0 0 0-5.46 1.855m5.46 5.46a8.949 8.949 0 0 0 1.855-5.46m-5.46 1.855a8.949 8.949 0 0 0-1.855 5.46m0 0a8.949 8.949 0 0 0 5.46 1.855" /></svg>`
};

export const MOCK_APPS: Record<string, AppDefinition> = {
    home: {
        id: 'home',
        name: 'Tela Inicial',
        icon: ICONS.HOME,
        packageName: 'com.gaby.launcher',
        activity: '.MainActivity',
        initialScreen: 'main',
        screens: {
            main: {
                id: 'main',
                name: 'Início',
                elements: [
                    { id: 'app_calc', type: 'icon', description: 'Ícone do aplicativo Calculadora', content: ICONS.CALCULATOR, x: 70, y: 100, width: 60, height: 60, navigateTo: { appId: 'calculator', screenId: 'main' } },
                    { id: 'app_settings', type: 'icon', description: 'Ícone do aplicativo Configurações', content: ICONS.SETTINGS, x: 180, y: 100, width: 60, height: 60, navigateTo: { appId: 'settings', screenId: 'main' } },
                    { id: 'app_doomsday', type: 'icon', description: 'Ícone do jogo Doomsday Last Survivors', content: '🎮', x: 290, y: 100, width: 60, height: 60, navigateTo: { appId: 'doomsday', screenId: 'game' } },
                    { id: 'time_widget', type: 'text', description: 'Widget de horas', content: '10:09', x: 175, y: 300, width: 200, height: 50 },
                    { id: 'date_widget', type: 'text', description: 'Widget de data', content: 'Terça, 24 de Julho', x: 175, y: 350, width: 200, height: 20 },
                ],
            },
        },
    },
    calculator: {
        id: 'calculator',
        name: 'Calculadora',
        icon: ICONS.CALCULATOR,
        packageName: 'com.gaby.calculator',
        activity: '.CalculatorActivity',
        initialScreen: 'main',
        screens: {
            main: {
                id: 'main',
                name: 'Calculadora',
                elements: [
                    { id: 'display', type: 'text', description: 'Visor da calculadora mostrando 0', content: '0', x: 175, y: 120, width: 280, height: 80 },
                    { id: 'btn_7', type: 'button', description: 'Botão para o número 7', content: '7', x: 55, y: 250, width: 70, height: 70 },
                    { id: 'btn_8', type: 'button', description: 'Botão para o número 8', content: '8', x: 135, y: 250, width: 70, height: 70 },
                    { id: 'btn_9', type: 'button', description: 'Botão para o número 9', content: '9', x: 215, y: 250, width: 70, height: 70 },
                    { id: 'btn_div', type: 'button', description: 'Botão para operador de divisão', content: '/', x: 295, y: 250, width: 70, height: 70 },
                    { id: 'btn_4', type: 'button', description: 'Botão para o número 4', content: '4', x: 55, y: 330, width: 70, height: 70 },
                    { id: 'btn_5', type: 'button', description: 'Botão para o número 5', content: '5', x: 135, y: 330, width: 70, height: 70 },
                    { id: 'btn_6', type: 'button', description: 'Botão para o número 6', content: '6', x: 215, y: 330, width: 70, height: 70 },
                    { id: 'btn_mul', type: 'button', description: 'Botão para operador de multiplicação', content: 'x', x: 295, y: 330, width: 70, height: 70 },
                    { id: 'btn_1', type: 'button', description: 'Botão para o número 1', content: '1', x: 55, y: 410, width: 70, height: 70 },
                    { id: 'btn_2', type: 'button', description: 'Botão para o número 2', content: '2', x: 135, y: 410, width: 70, height: 70 },
                    { id: 'btn_3', type: 'button', description: 'Botão para o número 3', content: '3', x: 215, y: 410, width: 70, height: 70 },
                    { id: 'btn_sub', type: 'button', description: 'Botão para operador de subtração', content: '-', x: 295, y: 410, width: 70, height: 70 },
                    { id: 'btn_0', type: 'button', description: 'Botão para o número 0', content: '0', x: 55, y: 490, width: 70, height: 70 },
                    { id: 'btn_dot', type: 'button', description: 'Botão para ponto decimal', content: '.', x: 135, y: 490, width: 70, height: 70 },
                    { id: 'btn_eq', type: 'button', description: 'Botão para operador de igual', content: '=', x: 215, y: 490, width: 70, height: 70 },
                    { id: 'btn_add', type: 'button', description: 'Botão para operador de adição', content: '+', x: 295, y: 490, width: 70, height: 70 },
                ],
            },
        },
    },
    settings: {
        id: 'settings',
        name: 'Configurações',
        icon: ICONS.SETTINGS,
        packageName: 'com.gaby.settings',
        activity: '.SettingsActivity',
        initialScreen: 'main',
        screens: {
            main: {
                id: 'main',
                name: 'Configurações',
                elements: [
                    { id: 'title', type: 'text', description: 'Título de Configurações', content: 'Configurações', x: 175, y: 50, width: 200, height: 40 },
                    { id: 'wifi', type: 'button', description: 'Botão de configurações de Wi-Fi', content: 'Wi-Fi', x: 175, y: 120, width: 300, height: 50 },
                    { id: 'bluetooth', type: 'button', description: 'Botão de configurações de Bluetooth', content: 'Bluetooth', x: 175, y: 180, width: 300, height: 50 },
                    { id: 'display', type: 'button', description: 'Botão de configurações de Tela', content: 'Tela', x: 175, y: 240, width: 300, height: 50 },
                    { id: 'sound', type: 'button', description: 'Botão de configurações de Som e Vibração', content: 'Som e Vibração', x: 175, y: 300, width: 300, height: 50 },
                    { id: 'about', type: 'button', description: 'Botão Sobre o telefone', content: 'Sobre o telefone', x: 175, y: 360, width: 300, height: 50 },
                ],
            },
        },
    },
    doomsday: {
        id: 'doomsday',
        name: 'Doomsday Last Survivors',
        icon: '🎮',
        packageName: 'com.craneballs.survivalday',
        activity: 'com.craneballs.survivalday.MainActivity',
        initialScreen: 'game',
        screens: {
            game: {
                id: 'game',
                name: 'Tela Principal do Jogo',
                elements: [
                    { id: 'btn_collect', type: 'button', description: 'Botão para coletar recursos', content: 'Coletar Recompensas', x: 175, y: 100, width: 200, height: 50 },
                    { id: 'main_shelter', type: 'image', description: 'Edifício principal do abrigo', content: 'Abrigo Nv. 5', x: 175, y: 300, width: 150, height: 150 },
                    { id: 'btn_map', type: 'button', description: 'Botão para abrir o mapa do mundo', content: 'Mapa', x: 60, y: 550, width: 80, height: 40 },
                    { id: 'btn_alliance', type: 'button', description: 'Botão para abrir o menu da aliança', content: 'Aliança', x: 290, y: 550, width: 80, height: 40 },
                ],
            },
        },
    },
};
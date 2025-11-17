
export enum CommandType {
    TAP = 'tap',
    SWIPE = 'swipe',
    TYPE_TEXT = 'typeText',
    SCREENSHOT = 'screenshot',
}

export interface AutomationAction {
    type: CommandType;
    x: number;
    y: number;
    endX?: number;
    endY?: number;
    text?: string;
    elementDescription: string;
}

export interface ChatMessage {
    sender: 'user' | 'gaby';
    text: string;
}

export interface ScreenElement {
    id: string;
    type: 'button' | 'text' | 'icon' | 'input' | 'image';
    description: string;
    content: string; // text for button/text, icon name for icon
    x: number; // center x
    y: number; // center y
    width: number;
    height: number;
    navigateTo?: {
        appId: string;
        screenId: string;
    };
}

export interface ScreenDefinition {
    id: string;
    name: string;
    elements: ScreenElement[];
}

export interface AppDefinition {
    id: string;
    name: string;
    icon: string; // SVG string or component
    initialScreen: string;
    screens: Record<string, ScreenDefinition>;
    packageName?: string;
    activity?: string;
}
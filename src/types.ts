//прописать типы для всех сущностей

/**
 * что-то в духе:
 * export interface IPlayer {
 *   id: number;
 *   name: string;
 *   image: string;
 *   hp: number;
 *   setHeal: (hp: number) => void;
 *   dices: TCombinationResult[];
 *   countRolls: number;
 *   damage: number;
 * */

export interface ApiCharacters {
    id: number;
    name: string;
    avatar: string;
}

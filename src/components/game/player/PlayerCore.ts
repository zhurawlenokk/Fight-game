import type { ApiCharacters } from '../../../types.ts';

export default class PlayerCore {
    static playerMaxHealth: number = 100;
    static defaultHealthColor: string = '#58964d';

    playerId: number;
    characterInfo: {
        characterName: string;
        characterImg: string;
    };
    playerHealth: {
        currentHealth: number;
        healthColor: string;
    };
    attackButtonDisable: boolean;
    isWinner: boolean;

    constructor(character: ApiCharacters) {
        this.playerId = character.id;
        this.characterInfo = {
            characterName: character.name,
            characterImg: character.avatar,
        };
        this.playerHealth = {
            currentHealth: PlayerCore.playerMaxHealth,
            healthColor: PlayerCore.defaultHealthColor,
        };
        this.attackButtonDisable = false;
        this.isWinner = false;
    }

    playerSetAttack(): void {
        this.attackButtonDisable = true;
    }

    playerGetDamage(damage: number, playerSetDamage: PlayerCore): void {
        this.attackButtonDisable = false;
        this.playerHealth.currentHealth = this.healthChecker(
            this.playerHealth.currentHealth - damage,
            playerSetDamage,
        );

        this.getHealthColor();
    }

    healthChecker(resultHealth: number, playerSetDamage: PlayerCore): number {
        if (resultHealth <= 0) {
            // обьявляем победителя
            playerSetDamage.isWinner = true;
        }

        return resultHealth > 0 ? resultHealth : 0;
    }

    getHealthColor(): void {
        const healthPercent = Math.ceil(
            (this.playerHealth.currentHealth * 100) /
                PlayerCore.playerMaxHealth,
        );

        switch (true) {
            case healthPercent > 50 && healthPercent < 75:
                this.playerHealth.healthColor = '#f8b30e';
                break;
            case healthPercent > 25 && healthPercent < 50:
                this.playerHealth.healthColor = '#f86948';
                break;
            case healthPercent > 0 && healthPercent < 25:
                this.playerHealth.healthColor = '#d20505';
                break;
        }
    }
}

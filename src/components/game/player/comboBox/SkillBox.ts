/**
 * Создает содержимое блока выбора комбо
 */

import Square from './Square.ts';

export default class SkillBox {
    static boxSize: number = 8;
    static maxRollByStep: number = 4; // 3 + 1 на автогенерацию
    static comboColor: string = '#f5537b';
    static colorList: string[] = [
        SkillBox.comboColor,
        '#7FFF00',
        '#FFFF00',
        '#00fdd7',
    ];

    exceptList: any[];
    skillBoxList: Square[];
    squareColorsCount: any[];
    rollsCount: number;
    damageInfo: {
        comboCubes: number;
        multiplier: number;
        baseDamage: number;
        formula: string;
        summaryDamage: number;
    };

    constructor() {
        this.exceptList = [];
        this.squareColorsCount = this.resetColorCounter();
        this.skillBoxList = [];
        this.damageInfo = {
            comboCubes: 0,
            multiplier: 0,
            baseDamage: 0,
            formula: '',
            summaryDamage: 0,
        };

        this.rollsCount = SkillBox.maxRollByStep;
        this.roll();
    }

    roll(afterAttack = false): void {
        if (afterAttack) {
            this.resetExceptList();
            this.resetRollsCount();
        }

        this.squareColorsCount = this.resetColorCounter();

        this.skillBoxList = this.generate();
        this.setDamageInfo();

        this.rollsCount--;
    }

    resetColorCounter(): number[] {
        const exceptIds = this.exceptList;
        let resetCounter = Array(SkillBox.colorList.length).fill(0);

        if (exceptIds.length > 0) {
            this.skillBoxList.forEach(function (item) {
                if (exceptIds.includes(item.id)) {
                    resetCounter[SkillBox.colorList.indexOf(item.color)]++;
                }
            });
        }

        return resetCounter;
    }

    generate(): Square[] {
        let generation: Square[] = [];
        let exceptList = this.exceptList;

        if (exceptList.length > 0) {
            let self = this;
            this.skillBoxList.forEach(function (item, index) {
                generation[index] = item;

                if (!exceptList.includes(index)) {
                    item.setColor(self.getRandomColor());
                }
            });
        } else {
            for (let i = 0; i < SkillBox.boxSize; i++) {
                generation.push(new Square(i, this.getRandomColor()));
            }
        }

        return generation;
    }

    getRandomColor(): string {
        const randomIndex: number = Math.floor(
            Math.random() * SkillBox.colorList.length,
        );

        if (this.squareColorsCount[randomIndex] === 4) {
            return this.getRandomColor();
        }

        this.squareColorsCount[randomIndex]++;

        return SkillBox.colorList[randomIndex]!;
    }

    /** Метод подсчета урона
     *
     * два и более кубиков цвета (const comboColor) - считаются комбо
     * каждый кубик цвета - 1 ед урона
     * комбо 2, 3, 4 кубов цвета (const comboColor) - является мноржителем урона
     */
    setDamageInfo(): void {
        // возвращает количество кубов участвующих в комбо (const comboColor)
        const countComboCubes: number = this.skillBoxList.filter(
            (item) => item.color === SkillBox.comboColor,
        ).length;
        const comboMultiplier: number =
            countComboCubes !== 0 && countComboCubes > 1 ? countComboCubes : 0;

        this.damageInfo = {
            comboCubes: countComboCubes,
            multiplier: comboMultiplier,
            baseDamage: SkillBox.boxSize,
            formula: 'baseDamage + (baseDamage * multiplier',
            summaryDamage:
                SkillBox.boxSize + SkillBox.boxSize * comboMultiplier,
        };
    }

    resetExceptList() {
        this.exceptList = [];
    }

    resetRollsCount() {
        this.rollsCount = SkillBox.maxRollByStep;
    }
}

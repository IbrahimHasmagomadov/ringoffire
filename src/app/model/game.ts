export class Game {
    public players: string[] = [];
    public currentPlayer: number = 0;
    public deck: string[] = [];
    public playedCards: string[] = [];

    constructor() {
        for (let i = 1; i <= 13; i++) {
        this.deck.push(`ace_` + i);
        this.deck.push(`hearts_` + i);
        this.deck.push(`diamonds_` + i);
        this.deck.push(`clubs_` + i);
        }
        shuffle(this.deck);
    }
}

function shuffle(array: string[]): string[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

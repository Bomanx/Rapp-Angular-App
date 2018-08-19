export interface Ingredient {
    ingredient: string;
    measure: string;
}

export interface Instruction {
    instruction: string;
    photo: string;
}

export class Recipe {
    public id: number;                  // id of a given recipe
    public title: string;               // Name of this recipe
    public description: string;         // Brief discription of recipe
    public number_feeds: number;        // # people fed by this recipe
    public prep_time: number;           // # minutes need to prepare
    public ingredients: Ingredient[];   // Array of ingredients in this recipe
    public instructions: Instruction[];  // array of instructions to prepare
    public cover_photo: string;         // link to photo of this recipe (can be null)
    public keywords: string[];          // TODO: support for possible searching via keywords

    constructor(id: number, t: string, d: string, numfed: number,
                pt: number, ingr: Ingredient[], instr: Instruction[],
                cp: string, kywrds: string[]) {
        this.id = id;
        this.title = t;
        this.description = d;
        this.number_feeds = numfed;
        this.prep_time = pt;
        this.ingredients = ingr;
        this.instructions = instr;
        this.cover_photo = cp;
        this.keywords = kywrds;
    }

    // Create a black recipe to be filled via user input
    public static createBlankRecipe() {
        return new Recipe(-1, '', '', 1, 1, [], [], null, null);
    }

    // Create a recipe object from a given JSON file
    public static recipeFromJSON(obj: any): Recipe {
        return new Recipe(obj.id, obj.title, obj.description, obj.number_feeds,
                          obj.prep_time, obj.ingredients, obj.instructions,
                          obj.cover_photo, obj.keywords);
    }
}

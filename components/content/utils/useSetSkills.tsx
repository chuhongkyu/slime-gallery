interface ISkill {
    size: string;
    type: string;
}

const useSetSkills = ({size, type}:ISkill) => {
    const makeSkills = (skillType: string) => {
        let dummySkills = {};
        switch (skillType) {
            case "fire":
                dummySkills = {
                    type: "fire",
                    damage: 210,
                    hp: 200
                };
                break;
            case "water":
                dummySkills = {
                    type: "water",
                    damage: 190,
                    hp: 210
                };
                break;
            case "normal":
                dummySkills = {
                    type: "normal",
                    damage: 200,
                    hp: 200
                };
                break;
            case "angel":
                dummySkills = {
                    type: "angel",
                    damage: 220,
                    hp: 220
                };
                break;
            case "forest":
                dummySkills = {
                    type: "forest",
                    damage: 180,
                    hp: 230
                };
                break;
            case "poison":
                dummySkills = {
                    type: "poison",
                    damage: 50,
                    hp: 220
                };
                break; 
            case "dark":
                dummySkills = {
                    type: "dark",
                    damage: 220,
                    hp: 190
                };
                break;
            default:
                dummySkills = {
                    type: "fire",
                    damage: 200,
                    hp: 200
                };
        }
        return dummySkills;
    };

    const skills = makeSkills(type);

    return { skills }
}

export default useSetSkills;
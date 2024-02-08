interface IProps {
    size: string;
    type: string;
}

export interface ISkill {
    type: string;
    color: string;
    damage: number;
    hp: number;
};

const useSetSkills = ({size, type}:IProps) => {
    const makeSkills = (skillType: string) => {
        let dummySkills: ISkill = {
            type: "fire",
            color: "red",
            damage: 200,
            hp: 200
        };
        switch (skillType) {
            case "fire":
                dummySkills = {
                    type: "fire",
                    color: "red",
                    damage: 210,
                    hp: 200
                };
                break;
            case "water":
                dummySkills = {
                    type: "water",
                    color: "skyblue",
                    damage: 190,
                    hp: 210
                };
                break;
            case "normal":
                dummySkills = {
                    type: "normal",
                    color: "yellow",
                    damage: 200,
                    hp: 200
                };
                break;
            case "angel":
                dummySkills = {
                    type: "angel",
                    color: "white",
                    damage: 220,
                    hp: 220
                };
                break;
            case "forest":
                dummySkills = {
                    type: "forest",
                    color: "green",
                    damage: 180,
                    hp: 230
                };
                break;
            case "poison":
                dummySkills = {
                    type: "poison",
                    color: "purple",
                    damage: 50,
                    hp: 220
                };
                break; 
            case "dark":
                dummySkills = {
                    type: "dark",
                    color: "black",
                    damage: 220,
                    hp: 190
                };
                break;
            default:
                dummySkills = {
                    type: "fire",
                    color: "red",
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
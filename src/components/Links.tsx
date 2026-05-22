import {CareerBox} from "./CareerBox.tsx";
import {LinksBox} from "./LinksBox.tsx";
import {PersonalBox} from "./PersonalBox.tsx";

type LinkItem = {
    label: string;
    description: string;
    url: string;
    external?: boolean;
};

export type Section = {
    heading: string;
    items: LinkItem[];
};

const RESEARCH_SECTION: Section[] = [
    {
        heading: "Research",
        items: [
            {
                label: "Nature Cell Biology (2019)",
                description:
                    "Persistent and polarized global actin flow is essential for directionality during cell migration.",
                url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7025891/pdf/EMS84443.pdf",
                external: true,
            },
            {
                label: "PhD Thesis (UCL, 2019)",
                description:
                    "A Destruction/Contraction Gradient Coordinates a Persistent and Polarized Global Actin Flow to Control Cell Directionality.",
                url: "https://discovery.ucl.ac.uk/id/eprint/10068186/1/L%20Yolland%20-%20Actin%20Flows%20&%20Cell%20Motility%20-%20PhD%20Thesis%202019.pdf",
                external: true,
            },
        ],
    },
];

const PROJECT_SECTION: Section[] = [
    {
        heading: "Projects",
        items: [

        ],
    },
];

export type Card = {
    src: string;
    r: number;
    tx: number;
    ty:number;
}

const DOG_CARDS: Card[] = [
    { src: "snow_dog.jpg",  r: -6, tx:   0, ty:  10 },
    { src: "above_the_clouds_with_doggo.jpg",  r: -6, tx:   0, ty:  10 },
    { src: "doggy_trail_run.jpg",              r:  3, tx: 135, ty:  -8 },
    { src: "forestry_climb_with_doggo.jpg",    r: -4, tx: 270, ty:  14 },
    { src: "hill_walk_with_doggo.jpeg",        r:  5, tx: 405, ty:  -5 },
    { src: "muddy_paws.jpg",                   r: -3, tx: 540, ty:  12 },
    { src: "mugdock_with_doggo.jpg",           r:  6, tx: 675, ty:  -6 },
];

const HOME_CARDS: Card[] = [
    { src: "clydeside.jpg",  r: -6, tx:   0, ty:  10 },
    { src: "first_bike_ride.jpg",              r:  3, tx: 135, ty:  -8 },
    { src: "highland_bog.jpg",    r: -4, tx: 270, ty:  14 },
    { src: "hilltop_pic.jpg",        r:  5, tx: 405, ty:  -5 },
    { src: "out_with_the_kiddos.jpg",           r:  6, tx: 675, ty:  -6 },
    { src: "skating_about.jpg",           r:  -4, tx: 675, ty:  -6 },
];

const DIY_CARDS: Card[] = [
    { src: "bird_house.jpg",  r: -6, tx:   0, ty:  10 },
    { src: "deck_and_mess.jpg",    r: -4, tx: 270, ty:  14 },
    { src: "deck_plus_helper.jpg",        r:  5, tx: 405, ty:  -5 },
    { src: "play_kitchen.jpeg",           r:  6, tx: 675, ty:  -6 },
];

const Links = () => {
    return (
        <div className="flex flex-col gap-4">
            <CareerBox chips={["TypeScript", "React", "Node.js", "Go"]} />
            <LinksBox
                sectionData={RESEARCH_SECTION}
                chips={["cell biology", "image analysis", "Python", "MatLab" , "R"]}>
                <div className="flex flex-row flex-wrap gap-4 mt-2">
                <video autoPlay loop muted playsInline className="max-w-full">
                    <source src="/random_v_directed_cells.mp4" type="video/mp4" />
                </video>
                <img src="/hemocyte_flow_field.png" alt="hemocyte flow field" className="max-w-full" />
            </div>
            </LinksBox>
        <LinksBox
            sectionData={PROJECT_SECTION}
            chips={["Java", "Go", "Python", "JavaScript", "Node.js"]}>
            <div>
                <h4>🚧 Under Construction 🚧</h4>
            </div>
        </LinksBox>

            <PersonalBox heading="Doggo" path='Dog' cards={DOG_CARDS} />
            <PersonalBox heading="Life" path='Home' cards={HOME_CARDS} />
            <PersonalBox heading="Other Builds" path="DIY" cards={DIY_CARDS}/>

        </div>
    )
};

export default Links;
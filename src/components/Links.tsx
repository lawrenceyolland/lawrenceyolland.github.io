import {CareerBox} from "./CareerBox.tsx";
import {LinksBox} from "./LinksBox.tsx";
import {PersonalBox} from "./PersonalBox.tsx";
import {ProjectBox} from "./ProjectBox.tsx";

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

export type Card = {
    path: string;
    src: string;
    r: number;
    tx: number;
    ty: number;
    comment?: string;
}

export const DOG_CARDS: Card[] = [
    { path: "Dog", src: "snow_dog.webp", r: -6, tx:   0, ty:  10 },
    { path: "Dog", src: "above_the_clouds_with_doggo.webp", r: -6, tx:   0, ty:  10 },
    { path: "Dog", src: "doggy_trail_run.webp", r:  3, tx: 135, ty:  -8 },
    { path: "Dog", src: "forestry_climb_with_doggo.webp", r: -4, tx: 270, ty:  14 },
    { path: "Dog", src: "hill_walk_with_doggo.webp", r:  5, tx: 405, ty:  -5 },
    { path: "Dog", src: "muddy_paws.webp", r: -3, tx: 540, ty:  12 },
    { path: "Dog", src: "mugdock_with_doggo.webp", r:  6, tx: 675, ty:  -6 },
];

export const HOME_CARDS: Card[] = [
    { path: "Home", src: "clydeside.webp", r: -6, tx:   0, ty:  10 },
    { path: "Home", src: "first_bike_ride.webp", r:  3, tx: 135, ty:  -8 },
    { path: "Home", src: "highland_bog.webp", r: -4, tx: 270, ty:  14 },
    { path: "Home", src: "hilltop_pic.webp", r:  5, tx: 405, ty:  -5 },
    { path: "Home", src: "out_with_the_kiddos.webp", r:  6, tx: 675, ty:  -6 },
    { path: "Home", src: "skating_about.webp", r: -4, tx: 675, ty:  -6 },
];

export const DIY_CARDS: Card[] = [
    { path: "DIY", src: "bird_house.webp", r: -6, tx:   0, ty:  10 },
    { path: "DIY", src: "deck_and_mess.webp", r: -4, tx: 270, ty:  14 },
    { path: "DIY", src: "deck_plus_helper.webp", r:  5, tx: 405, ty:  -5 },
    { path: "DIY", src: "play_kitchen.webp", r:  6, tx: 675, ty:  -6 },
];

const Links = () => {
    return (
        <div className="flex flex-col gap-4">
            <CareerBox chips={["TypeScript", "React", "Node.js", "Go", "Python", "SQL"]} />
            <LinksBox
                sectionData={RESEARCH_SECTION}
                chips={["cell biology", "image analysis", "Python", "MatLab" , "R"]}>
                <div className="flex flex-row flex-wrap gap-4 mt-2">
                <video autoPlay loop muted playsInline className="max-w-full">
                    <source src="/image_gallery/Research/random_v_directed_cells.mp4" type="video/mp4" />
                </video>
                <img src="/image_gallery/Research/hemocyte_flow_field.png" alt="hemocyte flow field" className="max-w-full" />
            </div>
            </LinksBox>

            <ProjectBox />
            <PersonalBox path="Home" heading="Life" cards={HOME_CARDS} />
            <PersonalBox path="Dog" heading="Doggo" cards={DOG_CARDS} />
            <PersonalBox path="DIY" heading="Other Builds" cards={DIY_CARDS}/>

        </div>
    )
};

export default Links;
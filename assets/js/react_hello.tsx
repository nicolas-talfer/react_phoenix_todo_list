import React from "react";
interface HelloProps {
    name: string;
}
const ReactHello: React.FC<HelloProps> = (props: HelloProps) => {
    const name = props.name;
    return (
        <section class="phx-hero">
            <h1 class="text-brand mt-10 flex items-center text-sm font-semibold leading-6">
                Say Hello to {name} with TypeScript and React!</h1>
            <p>We are ready to go!</p>
        </section>
    );
};
export default ReactHello;
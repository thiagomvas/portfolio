export type Project = {
    name: string,
    description: string,
    logoUrl?: string,
    stack: string,
    repoUrl?: string
}

export const projects: Project[] = [
    { name: "Seederly", description: "Seederly is a modern API tester, but smarter. It lets you create, test, and send HTTP requests while automatically generating realistic, structured, and schema-based fake data, with none of that AI bloat. ", stack: "C#, Avalonia UI", repoUrl: "https://www.google.com" },
    { name: "TMath", description: "A C# Math library powered by generics using numerical interfaces to support multiple types", stack: "C#" },
    { name: "Basalt", description: "A game development framework made in C# whose primary focus is a DIY aspect. It is designed with the idea that you can build your own game engine from the ground up, using Basalt as a foundation.", stack: "C#, Raylib"},
    { name: "SharpTables", description: "A versatile and customizable console table formatter. Generate tables ready to be written to console with the ability to customize even the characters used by the generator to generate the table.", stack: "C#" },

]
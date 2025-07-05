export type Project = {
    name: string,
    repoFullName: string,
    description: string,
    logoUrl?: string,
    stack: string,
    stars?: number,
    forks?: number,
    tryItOutUrl?: string,
}

export const projects: Project[] = [
    {
        name: "FFlow",
        repoFullName: "thiagomvas/FFlow",
        description: "FFlow is a lightweight, extensible workflow automation library for .NET with fluent, code-first syntax. Built for CI/CD, DevOps, and backend orchestration, it supports dependency injection, branching logic, and step decorators—no XML or DSL required. ",
        stack: "C#"
    },
    {
      name: "Seederly",
      repoFullName: "thiagomvas/Seederly",
      description: "Seederly is a modern API tester, but smarter. It lets you create, test, and send HTTP requests while automatically generating realistic, structured, and schema-based fake data, with none of that AI bloat.",
      stack: "C#, Avalonia UI",
      stars: 1,
      forks: 1,
    },
    {
      name: "TMath",
      repoFullName: "thiagomvas/TMath",
      description: "A C# Math library powered by generics using numerical interfaces to support multiple types",
      stack: "C#",
      stars: 4,
    },
    {
      name: "Basalt",
      repoFullName: "thiagomvas/Basalt",
      description: "A game development framework made in C# whose primary focus is a DIY aspect. It is designed with the idea that you can build your own game engine from the ground up, using Basalt as a foundation.",
      stack: "C#, Raylib",
      stars: 4,
      forks: 1,
    },
    {
      name: "SharpTables",
      repoFullName: "thiagomvas/SharpTables",
      description: "A versatile and customizable console table formatter. Generate tables ready to be written to console with the ability to customize even the characters used by the generator to generate the table.",
      stack: "C#",
      stars: 2,
    },
  ];
  
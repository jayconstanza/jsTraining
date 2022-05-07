import { Car } from "./ex04"

export function app(): void {
    console.log("hello index.js");
    const f = () => {
        new Car({ name: "car"+Date.now(), alias: "alias"+Date.now(), cv: Math.floor(Math.random() * 1000) + 2})
    }
    setInterval(() => { f() }, 1000);
    setInterval(() => { console.log(Car.getCars()) }, 1500);
}
app()
// TODO add ts-node to run forever insead of npx tsc -w
// https://stackoverflow.com/questions/57997191/how-to-run-typescript-files-on-server-in-background
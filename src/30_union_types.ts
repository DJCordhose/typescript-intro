export default undefined;

// Idea:
// client requests "actions" from the server and then executes them
// We don't create the action objects, but get them ready to use
// so we have no influence on how they look like

type VerifyIbanAction = {
  iban: string;
};

type VerifyAgeAction = {
  age: number;
};

type Action = VerifyAgeAction | VerifyIbanAction;

function handleAction(action: Action) {
  // how do we distinguish the actions here ???
  // 😱🙋‍♀️🙋‍♂️
}

// https://www.typescriptlang.org/play?q=129#example/union-and-intersection-types
// https://www.typescriptlang.org/play?q=241#example/unknown-and-never
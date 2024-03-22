try {
  const invalidJSON = '{ "key": "value", }';
  JSON.parse(invalidJSON);
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log("Caught SyntaxError: ", error.message);
  } else {
    throw error;
  }
}

try {
  eval("2 +");
} catch (error) {
  if (error instanceof EvalError) {
    console.log("Caught EvalError :", error.message);
  } else {
    throw error;
  }
}

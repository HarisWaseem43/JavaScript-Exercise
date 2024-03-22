try {
  invalidURI = "%";
  decodeURIComponent(invalidURI);
} catch (error) {
  if (error instanceof URIError) {
    console.log("Caught URIError: ", error.message);
  } else {
    throw error;
  }
}

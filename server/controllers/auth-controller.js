export const getHomePage = (req, res) => {
  try {
    res.status(200).send("Welcome to Home page");
  } catch (error) {
    console.log(error);
  }
};

export const getRegisterPage = (req, res) => {
  try {
    res.status(200).send("Welcome to Registration page");
  } catch (error) {
    console.log(error);
  }
};

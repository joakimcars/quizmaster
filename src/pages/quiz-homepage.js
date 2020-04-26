const express = require("express");
const ctx = require("../data/context");
const router = express.Router();
const render = require("./render");

function renderForm() {
  return `
  <form class="ui form" method="post">
    <h1>Create a quiz!</h1>
    <div class="ui action input fluid huge">
      <input 
        type="text"
        class="ui input field"
        placeholder="Let's get quizzicle!"
        name="title"
      />
      <button class="ui button">Create</button>
    </div>
  </form>
  `;
}

router.get("/", async (req, res, next) => {
  try {
    const html = render({
      title: "Create your quiz",
      body: renderForm(),
    });

    return res.status(200).send(html);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const quiz = await ctx.quiz.saveQuiz({
      questions: [],
    });

    return res.redirect(`/quiz-builder/${quiz.id}`);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
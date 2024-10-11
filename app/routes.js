//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require("govuk-prototype-kit");
const router = govukPrototypeKit.requests.setupRouter();

// Add your routes here

router.post("/namePageContinue", (req, res) => {
    res.redirect("/emailPage");
});

router.post("/emailPageContinue", (req, res) => {
    res.redirect("/propertyAddressPage");
});

router.post("/propertyAddressPageContinue", (req, res) => {
    res.redirect("/vrnPage");
});

router.post("/vrnPageContinue", (req, res) => {
    res.redirect("/checkYourAnswersPage");
});

router.post("/acceptSend", (req, res) => {
    res.redirect("/applicationConfirmation");
});

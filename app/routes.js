//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require("govuk-prototype-kit");
const router = govukPrototypeKit.requests.setupRouter();

// Add your routes here

router.post("/beginApply", (req, res) => {
    res.redirect("/vrnPage");
});

router.post("/vrnPageContinue", (req, res) => {
    res.redirect("/confirmVehicleDetails");
});

router.post("/confirmVehicleDetails", (req, res) => {
    vehicleConfirm = req.session.data["vehicleConfirm"];
    var regNumber = req.session.data["vehicle-reg-number"];
    if (regNumber === "abc" && vehicleConfirm === "yes") {
        res.redirect("/notElectricVehicle");
    } else if (vehicleConfirm === "no") {
        res.redirect("/vrnPage");
    } else {
        res.redirect("/namePage");
    }
});

router.post("/notEV", (req, res) => {
    res.redirect("/index");
});

router.post("/namePageContinue", (req, res) => {
    res.redirect("/emailPage");
});

router.post("/emailPageContinue", (req, res) => {
    res.redirect("/propertyAddressPage");
});

router.post("/propertyAddressPageContinue", (req, res) => {
    res.redirect("/checkYourAnswersPage");
});

router.post("/acceptSend", (req, res) => {
    if(req.session.data["vehicle-reg-number"] === "1"){
        res.redirect("/errorPage")
    }
    else{
        res.redirect("/applicationConfirmation");
    }
});

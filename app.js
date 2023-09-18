//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use('*/css', express.static('public/css'));
app.use('*/images', express.static('public/images'));
app.use('*/fonts', express.static('public/fonts'));
app.use('*/js', express.static('public/js'));
app.use('*/vendor', express.static('public/vendor'));

mongoose.connect("mongodb://localhost:27017/DigiIter", { useNewUrlParser: true });

const eventsSchema = {
  name: String,
  img: String,
  description: String,
  link: String
};
const semMaterialSchema = {
  name: String,
  img: String,
  description: String,
  link: String
};
const extraMaterialSchema = {
  name: String,
  img: String,
  description: String,
  link: String
};


const event = mongoose.model("event", eventsSchema);
const semMat = mongoose.model("semMat", semMaterialSchema);
const extraMat = mongoose.model("extraMat", extraMaterialSchema);

const extraMaterial1 = new extraMat({
  name: "DSA",
  img: "../public/images/dsa_material_image.webp",
  description: "Includes complete DSA resources like Notes , cheatsheets and various questions",
  link: "https://drive.google.com/drive/folders/1BsI2PeI0JG0PXL7azTiEoYR2ZI4eQze2"
});
const extraMaterial2 = new extraMat({
  name: "Interview Questions",
  img: "../public/images/companywise_ques.webp",
  description: "Contains various question asked by FAANG companies in their interview ",
  link: "https://drive.google.com/drive/folders/16JefJXCnIKuJ8mJcWsQ2CMp-jm5FDn3W"
});
const extraMaterial3 = new extraMat({
  name: "JAVA",
  img: "../public/images/java.webp",
  description: "Contains Java interview questions",
  link: "https://drive.google.com/file/d/1RHX_tc2cRYWY_3QBhYf6RMMekCD1s0WM/view?usp=sharing"
});
const extraMaterial4 = new extraMat({
  name: "WEB DEV. Notes",
  img: "../public/images/web-dev.webp",
  description: "Contains complete notes for Web Devlopment . Includes HTML,CSS,jQuery,Bootstrap,JS,NodeJS,MongoDB and React",
  link: "https://drive.google.com/file/d/1VRG9bP8YW5rq6FxJdiBVJyuFv_xnACSU/view?usp=sharing"
});

const allExtraMaterial = [extraMaterial1, extraMaterial2, extraMaterial3, extraMaterial4];


const subject1 = new semMat({
  name: "1st SEMESTER",
  img: "../public/images/courses-01.jpg",
  description: "Calculus , Discrete Mathematics , Principle of Microeconimics , University Physics: Mechanics , ICP",
  link: "https://drive.google.com/drive/folders/1wOiVRqj4JRkOcSiP2EoZTs9QRHZlirP-"
});
const subject2 = new semMat({
  name: "2nd SEMESTER",
  img: "../public/images/courses-02.jpg",
  description: "Calculus-II , Critical Thinking and Communication , Data Structures and Algorithm , Introduction to Graph Theory , University Physics: Electricty and Magnetisum",
  link: "https://drive.google.com/drive/folders/1hYIA_XhTc-277SxP4qAoSTeGWH3rsPMy"
});
const subject3 = new semMat({
  name: "3rd SEMESTER",
  img: "../public/images/courses-03.jpg",
  description: "Algorithm Design-I , Digital Logic Design , Principle of Macroeconomics , Probability and Stastics",
  link: "https://drive.google.com/drive/folders/1bcxtuY1q2HgwjihTsn9W0ghfR6HTzNhy"
});
const subject4 = new semMat({
  name: "4th SEMESTER",
  img: "../public/images/courses-04.jpg",
  description: "Algorithm design-II , Applied Linear Algebra , Computer Organisation and Architecture , Computer Science Workshop-II , Universal Human Values ",
  link: "https://drive.google.com/drive/folders/1JYAms9HmgIShjAdZiNviD_OlT9B-c-Wl"
});
const subject5 = new semMat({
  name: "5th SEMESTER",
  img: "../public/images/courses-01.jpg",
  description: "Advanced Discrete Mathematics , Design of Operating System , Operating System Workshop , Theory of Computation , Programming in Python , Computer Networks",
  link: "https://drive.google.com/drive/folders/16_mJj3qCrtkoItdcBBjx6XZJ3CQFePYu"
});
const subject6 = new semMat({
  name: "6th SEMESTER",
  img: "../public/images/courses-05.jpg",
  description: "*under devlopment",
  link: "/"
});
const allSubjects = [subject1, subject2, subject3, subject4, subject5, subject6];



const event1 = new event({
  name: "Reliance TUP 8.0",
  img: "../public/images/rel_evnt.jpg",
  description: "The power of innovation and ideas has shaped the Reliance legacy. The Ultimate Pitch was born as a strategic elevator pitch contest to celebrate the spirit of innovation and entrepreneurial zeal. We believe that ideas are no one’s monopoly and even the simplest of ideas could spark something huge. ",
  link: "https://unstop.com/competition/reliance-tup-80-reliance-industries-limited-ril-449738"

});
const event2 = new event({
  name: "INFOXPRESSION",
  img: "../public/images/infoexp.webp",
  description: "InfoXpression is the annual tech carnival of the University School of Information and Communication Technology to test one’s technical acumen over three days of intense, engaging, and fun events. Attracting active participation of students from over 250 colleges across North India",
  link: "https://infoxpression.tech/"
});
const event3 = new event({
  name: "Colgate Transcend",
  img: "../public/images/colgate_evnt.webp",
  description: "Gear up for the All-New Season of Transcend 2022. It's time to put on your thinking caps and look for creative and innovative solutions to not just solve & provide exceptional solutions to the real-time challenge faced by businesses but to get an opportunity to interact and learn from Industry experts. ",
  link: "https://unstop.com/competition/colgate-transcend-2022-colgate-palmolive-india-limited-492470?refId=CT22B"
});
const event4 = new event({
  name: "Fujitsu 100",
  img: "../public/images/fitju_evnt.webp",
  description: "Fujitsu 100 is a flagship program by Fujitsu, designed by the top leaders in the industry to in turn prepare the next generation of managers to build a solid future for themselves. We are on the lookout for the potential of today, in bringing out the leaders of tomorrow and helping them help the community.",
  link: "https://fujitsu100.in.fujitsu.com/registration/"
});
const event5 = new event({
  name: "Robotics Challenge",
  img: "../public/images/robotic_evnt.webp",
  description: "Flipkart GRiD Robotics Challenge is a competition that aims to challenge the contestants in the areas of stable hovering and maneuvering of the quadcopter and also its capabilities to perform the assigned task as per the problem statement.",
  link: "https://unstop.com/competition/flipkart-grid-40-robotics-challenge-in-association-with-shaastra-iit-madras-shaastra-2023-indian-institute-o-431848"
});
const event6 = new event({
  name: "EO 360",
  img: "../public/images/enter_evnt.webp",
  description: "The EO Global Student Entrepreneur Awards (EO GSEA) is the premier event for student entrepreneurs worldwide. Student entrepreneurs compete against their peers from around the world in a series of local competitions to qualify for the EO GSEA Global Finals.",
  link: "https://unstop.com/competition/global-student-entrepreneurs-awards-eo-gurgaon-451053"
});
const allEvents = [event1, event2, event3, event4, event5, event6];



app.get("/", function (req, res) {
  res.render("index");
});
app.get("/materials", function (req, res) {
  semMat.find({}, function (err, foundSubjects) {
    if (foundSubjects.length === 0) {
      semMat.insertMany(allSubjects, function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Successfully savevd all subjects to DB.");
        }
      });
      // res.redirect("/materials");
    }
    // else  {
    //   res.render("materials", { newSubjects: foundSubjects });
    // }
    extraMat.find({}, function (err, foundExtMat) {
      if (foundExtMat.length === 0) {
        extraMat.insertMany(allExtraMaterial, function (err) {
          if (err) {
            console.log(err);
          } else {
            console.log("Successfully savevd all extra materials to DB.");
          }
        });
        res.redirect("/materials");
      } else {
        res.render("materials", { newSubjects: foundSubjects, newExtMat: foundExtMat });
      }
    });
  });
});

app.get("/evnt", function (req, res) {
  event.find({}, function (err, foundEvents) {
    if (foundEvents.length === 0) {
      event.insertMany(allEvents, function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Successfully savevd all events to DB.");
        }
      });
      res.redirect("/evnt");
    } else {
      res.render("evnt", { newEvents: foundEvents });
    }
  });
});


app.post("/mail", function (req, res) {

  var mname = req.body.name;
  var mmail = req.body.email;
  var msub = req.body.subject;
  var mmsg = req.body.message;
  console.log(mname);
  console.log(mmsg);
  const transporter = nodemailer.createTransport({
    port: 465, // true for 465, false for other ports 
    host: "smtp.gmail.com", auth: { user: "subrattesting878@gmail.com", pass: "drvyjtorkdsgzjur", }, secure: true, requireTLS: true,
  });
  const mailOptions = { from: "subrattesting878@gmail.com", to: "subrat3471@gmail.com", subject: msub, html: "NAME : "+mname+" ; MAIL : "+mmail+" ; MESSAGE : "+mmsg, };
  transporter.sendMail(mailOptions);
  res.send("Mail sent to the devloper .");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});

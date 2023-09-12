function generateQuestionPaper() {
    var subject = document.getElementById("subject").value;
    var year = document.getElementById("year").value;
    var Unit = document.getElementById("Unit").value;
    var pdfPath;

    if (subject === "Engineering Mathematics-I") {
        if (year === "2022-2023") {
            if (Unit === "Unit 1") {
                window.location.href = "/html/notfound.html";
                return;
            } else if (Unit === "Unit 2") {
                window.location.href = "/html/notfound.html";
                return;
            } else if (Unit === "Unit 3") {
                window.location.href = "/html/notfound.html";
                return;
            } else if (Unit === "Unit 4") {
                window.location.href = "/html/notfound.html";
                return;
            } else if (Unit === "Unit 5") {
                window.location.href = "/html/notfound.html";
                return;
            } else if (Unit === "Lab File") {
                window.location.href = "/html/notfound.html"
                return;
            } else if (Unit === "Important Questions") {
                pdfPath = "/PDFS/Maths1-importantquestions.pdf";
            }

        }
    }

    else if (subject === "Engineering Mathematics-II") {
        if (year === "2022-2023") {
            if (Unit === "Unit 1") {
                window.location.href = "/html/notfound.html";
                return;
            } else if (Unit === "Unit 2") {
                window.location.href = "/html/notfound.html";
                return;
            } else if (Unit === "Unit 3") {
                window.location.href = "/html/notfound.html";
                return;
            } else if (Unit === "Unit 4") {
                window.location.href = "/html/notfound.html";
                return;
            } else if (Unit === "Unit 5") {
                window.location.href = "/html/notfound.html";
                return;
            } else if (Unit === "Lab File") {
                window.location.href = "/html/notfound.html"
                return;
            } else if (Unit === "Important Questions") {
                pdfPath = "/PDFS/Maths1-importantquestions.pdf";
            }
        }
    }

    else if (subject === "Engineering Physics") {
        if (year === "2022-2023") {
            if (Unit === "Unit 1") {
                window.location.href = "/html/notfound.html";
                return;
            } else if (Unit === "Unit 2") {
                window.location.href = "/html/notfound.html";
                return;
            } else if (Unit === "Unit 3") {
                window.location.href = "/html/notfound.html";
                return;
            } else if (Unit === "Unit 4") {
                window.location.href = "/html/notfound.html";
                return;
            } else if (Unit === "Unit 5") {
                pdfPath = "/PDFS/Physics-unit5.pdf";
            } else if (Unit === "Lab File") {
                pdfPath = "/PDFS/Physics-labfile.pdf";
            } else if (Unit === "Important Questions") {
                pdfPath = "/PDFS/Physics-importantquestions.pdf";
            }
        }
    }

    else if (subject === "Engineering Chemistry") {
        if (year === "2022-2023") {
            if (Unit === "Unit 1") {
                pdfPath = "/PDFS/Chemistry-unit1.pdf";
            } else if (Unit === "Unit 2") {
                pdfPath = "/PDFS/Chemistry-unit2.pdf";
            } else if (Unit === "Unit 3") {
                pdfPath = "/PDFS/Chemistry-unit3.pdf";
            } else if (Unit === "Unit 4") {
                pdfPath = "/PDFS/Chemistry-unit4.pdf";
            } else if (Unit === "Unit 5") {
                window.location.href = "/html/notfound.html";
                return;
            } else if (Unit === "Lab File") {
                window.location.href = "/html/notfound.html"
                return;
            } else if (Unit === "Important Questions") {
                window.location.href = "/html/notfound.html"
                return;
            }
        }
    }

    else if (subject === "Electronics Engineering") {
        if (year === "2022-2023") {
            if (Unit === "Unit 1") {
                window.location.href = "/html/notfound.html";
                return;
            } else if (Unit === "Unit 2") {
                window.location.href = "/html/notfound.html";
                return;
            } else if (Unit === "Unit 3") {
                window.location.href = "/html/notfound.html";
                return;
            } else if (Unit === "Unit 4") {
                window.location.href = "/html/notfound.html";
                return;
            } else if (Unit === "Unit 5") {
                pdfPath = "/PDFS/Electronics-unit5.pdf";
            } else if (Unit === "Lab File") {
                window.location.href = "/html/notfound.html";
                return;
            } else if (Unit === "Important Questions") {
                pdfPath = "/PDFS/Electronics-importantquestions.pdf";
            }
        }
    }

    else if (subject === "Electrical Engineering") {
        if (year === "2022-2023") {
            if (Unit === "Unit 1") {
                window.location.href = "/html/notfound.html";
                return;
            } else if (Unit === "Unit 2") {
                window.location.href = "/html/notfound.html";
                return;
            } else if (Unit === "Unit 3") {
                pdfPath = "/PDFS/Electrical-unit3.pdf";
            } else if (Unit === "Unit 4") {
                window.location.href = "/html/notfound.html";
                return;
            } else if (Unit === "Unit 5") {
                pdfPath = "/PDFS/Electrical-unit5.pdf";
            } else if (Unit === "Lab File") {
                pdfPath = "/PDFS/Electrical-labfile.pdf";
            } else if (Unit === "Important Questions") {
                pdfPath = "/PDFS/Electrical-importantquestions.pdf";
            }
        }
    }

    else if (subject === "Mechanical Engineering") {
        if (year === "2022-2023") {
            if (Unit === "Unit 1") {
                window.location.href = "/html/notfound.html";
                return;
            } else if (Unit === "Unit 2") {
                pdfPath = "/PDFS/Mechanical-unit2.pdf";
            } else if (Unit === "Unit 3") {
                pdfPath = "/PDFS/Mechanical-unit3.pdf";
            } else if (Unit === "Unit 4") {
                pdfPath = "/PDFS/Mechanical-unit4.pdf";
            } else if (Unit === "Unit 5") {
                pdfPath = "/PDFS/Mechanical-unit5.pdf";
            } else if (Unit === "Lab File") {
                window.location.href = "/html/notfound.html";
                return;
            } else if (Unit === "Important Questions") {
                pdfPath = "/PDFS/Mechanical-importantquestions.pdf";
            }
        }
    }

    else if (subject === "Programming for problem solving") {
        if (year === "2022-2023") {
            if (Unit === "Unit 1") {
                pdfPath = "/PDFS/Pps-unit1.pdf";
            } else if (Unit === "Unit 2") {
                pdfPath = "/PDFS/Pps-unit2.pdf";
            } else if (Unit === "Unit 3") {
                pdfPath = "/PDFS/Pps-unit3.pdf";
            } else if (Unit === "Unit 4") {
                pdfPath = "/PDFS/Pps-unit4.pdf";
            } else if (Unit === "Unit 5") {
                pdfPath = "/PDFS/Pps-unit5.pdf";
            } else if (Unit === "Lab File") {
                pdfPath = "/PDFS/Pps-labfile.pdf";
            } else if (Unit === "Important Questions") {
                pdfPath = "/PDFS/Pps-importantquestions.pdf";
            }
        }
    }

    else if (subject === "Softskill") {
        if (year === "2022-2023") {
            if (Unit === "Unit 1") {
                pdfPath = "/PDFS/Softskill-unit1.pdf";
            } else if (Unit === "Unit 2") {
                pdfPath = "/PDFS/Softskill-unit2.pdf";
            } else if (Unit === "Unit 3") {
                pdfPath = "/PDFS/Softskill-unit3.pdf";
            } else if (Unit === "Unit 4") {
                pdfPath = "/PDFS/Softskill-unit4.pdf";
            } else if (Unit === "Unit 5") {
                pdfPath = "/PDFS/Softskill-unit5.pdf";
            } else if (Unit === "Lab File") {
                window.location.href = "/html/notfound.html";
                return;
            } else if (Unit === "Important Questions") {
                pdfPath = "/PDFS/Softskill-importantquestions.pdf";
            }
        }
    }

    else if (subject === "Environment and Ecology") {
        if (year === "2022-2023") {
            if (Unit === "Unit 1") {
                pdfPath = "/PDFS/Evs-unit1.pdf";
            } else if (Unit === "Unit 2") {
                pdfPath = "/PDFS/Evs-unit2.pdf";
            } else if (Unit === "Unit 3") {
                pdfPath = "/PDFS/Evs-unit3.pdf";
            } else if (Unit === "Unit 4") {
                pdfPath = "/PDFS/Evs-unit4.pdf";
            } else if (Unit === "Unit 5") {
                pdfPath = "/PDFS/Evs-unit5.pdf";
            } else if (Unit === "Lab File") {
                window.location.href = "/html/notfound.html";
                return;
            } else if (Unit === "Important Questions") {
                window.location.href = "/html/notfound.html";
                return;
            }
        }
    }

    var newTab = window.open(pdfPath, '_blank');
    newTab.focus();
}

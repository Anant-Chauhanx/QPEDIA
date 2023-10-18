function generateQuestionPaper() {
  var subject = document.getElementById("subject").value;
  var year = document.getElementById("year").value;
  var semester = document.getElementById("semester").value;
  var pdfPath;

  if (subject === "Engineering Mathematics-I") {
    if (year === "2022-2023") {
      if (semester === "First Semester") {
        pdfPath = "/PDFS/Maths1-sem1-22-23.pdf";
      } else if (semester === "Second Semester") {
        window.location.href = "/html/notfound.html";
        return;
      }
    } else if (year === "2021-2022") {
      if (semester === "First Semester") {
        pdfPath = "/PDFS/Maths1-sem1.pdf";
      } else if (semester === "Second Semester") {
        window.location.href = "/html/notfound.html";
        return;
      }
    }
  }

  else if (subject === "Engineering Mathematics-II") {
    if (year === "2022-2023") {
      if (semester === "First Semester") {
        window.location.href = "/html/notfound.html";
        return;
      } else if (semester === "Second Semester") {
        pdfPath = "/PDFS/Maths2-sem2-22-23.pdf";
      }
    } else if (year === "2021-2022") {
      if (semester === "First Semester") {
        window.location.href = "/html/notfound.html";
        return;
      } else if (semester === "Second Semester") {
        pdfPath = "/PDFS/Maths2-sem2.pdf";
      }
    }
  }

  else if (subject === "Engineering Physics") {
    if (year === "2022-2023") {
      if (semester === "First Semester") {
        pdfPath = "/PDFS/Physics-sem1-22-23.pdf";
      } else if (semester === "Second Semester") {
        pdfPath = "/PDFS/Physics-sem2-22-23.pdf";
      }
    } else if (year === "2021-2022") {
      if (semester === "First Semester") {
        pdfPath = "/PDFS/Physics-sem1.pdf";
      } else if (semester === "Second Semester") {
        pdfPath = "/PDFS/Physics-sem2.pdf";
      }
    }
  }

  else if (subject === "Engineering Chemistry") {
    if (year === "2022-2023") {
      if (semester === "First Semester") {
        pdfPath = "/PDFS/Chemistry-sem1-22-23.pdf";
      } else if (semester === "Second Semester") {
        pdfPath = "/PDFS/Chemistry-sem2-22-23.pdf";
      }
    } else if (year === "2021-2022") {
      if (semester === "First Semester") {
        pdfPath = "/PDFS/Chemistry-sem1.pdf";
      } else if (semester === "Second Semester") {
        pdfPath = "/PDFS/Chemistry-sem2.pdf";
      }
    }
  }

  else if (subject === "Electronics Engineering") {
    if (year === "2022-2023") {
      if (semester === "First Semester") {
        pdfPath = "/PDFS/Electronics-sem1-22-23.pdf";
      } else if (semester === "Second Semester") {
        pdfPath = "/PDFS/Electronics-sem2-22-23.pdf";
      }
    } else if (year === "2021-2022") {
      if (semester === "First Semester") {
        pdfPath = "/PDFS/Electronics-sem1.pdf";
      } else if (semester === "Second Semester") {
        pdfPath = "/PDFS/Electronics-sem2.pdf";
      }
    }
  }

  else if (subject === "Electrical Engineering") {
    if (year === "2022-2023") {
      if (semester === "First Semester") {
        pdfPath = "/PDFS/Electrical-sem1-22-23.pdf";
      } else if (semester === "Second Semester") {
        pdfPath = "/PDFS/Electrical-sem2-22-23.pdf";
      }
    } else if (year === "2021-2022") {
      if (semester === "First Semester") {
        pdfPath = "/PDFS/Electrical-sem1.pdf";
      } else if (semester === "Second Semester") {
        pdfPath = "/PDFS/Electrical-sem2.pdf";
      }
    }
  }

  else if (subject === "Mechanical Engineering") {
    if (year === "2022-2023") {
      if (semester === "First Semester") {
        pdfPath = "/PDFS/Mechanical-sem1-22-23.pdf";
      } else if (semester === "Second Semester") {
        pdfPath = "/PDFS/Mechanical-sem2-22-23.pdf";
      }
    } else if (year === "2021-2022") {
      if (semester === "First Semester") {
        pdfPath = "/PDFS/Mechanical-sem1.pdf";
      } else if (semester === "Second Semester") {
        pdfPath = "/PDFS/Mechanical-sem2.pdf";
      }
    }
  }

  else if (subject === "Programming for problem solving") {
    if (year === "2022-2023") {
      if (semester === "First Semester") {
        pdfPath = "/PDFS/Pps-sem1-22-23.pdf";
      } else if (semester === "Second Semester") {
        pdfPath = "/PDFS/Pps-sem2-22-23.pdf";
      }
    } else if (year === "2021-2022") {
      if (semester === "First Semester") {
        pdfPath = "/PDFS/Pps-sem1.pdf";
      } else if (semester === "Second Semester") {
        pdfPath = "/PDFS/Pps-sem2.pdf";
      }
    }
  }

  else if (subject === "Softskill") {
    if (year === "2022-2023") {
      if (semester === "First Semester") {
        pdfPath = "/PDFS/Softskill-sem1-22-23.pdf";
      } else if (semester === "Second Semester") {
        pdfPath = "/PDFS/Softskills-sem2-22-23.pdf";
      }
    } else if (year === "2021-2022") {
      if (semester === "First Semester") {
        pdfPath = "/PDFS/Softskill-sem1.pdf";
      } else if (semester === "Second Semester") {
        pdfPath = "/PDFS/Softskill-sem2.pdf";
      }
    }
  }

  else if (subject === "Environment and Ecology") {
    if (year === "2022-2023") {
      if (semester === "First Semester") {
        pdfPath = "/PDFS/Evs-sem1-22-23.pdf";
      } else if (semester === "Second Semester") {
        pdfPath = "/PDFS/Evs-sem2-22-23.pdf";
      }
    } else if (year === "2021-2022") {
      if (semester === "First Semester") {
        window.location.href = "/html/notfound.html";
        return;
      } else if (semester === "Second Semester") {
        window.location.href = "/html/notfound.html";
        return;
      }
    }
  }

  var newTab = window.open(pdfPath, '_blank');
  newTab.focus();
}

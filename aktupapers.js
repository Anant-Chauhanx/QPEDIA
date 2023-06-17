function generateQuestionPaper() {
  var subject = document.getElementById("subject").value;
  var year = document.getElementById("year").value;
  var semester = document.getElementById("semester").value;
  var pdfPath;

  if (subject === "Engineering Mathematics-I") {
    if (year === "2021-2022") {
      if (semester === "First Semester") {
        pdfPath = "PDFS/Maths1-sem1.pdf";
      } else if (semester === "even") {
        pdfPath = "samplee.pdf";
      }
    } else if (year === "2021") {
      if (semester === "odd") {
        pdfPath = "paste_path_to_maths_2021_odd.pdf";
      } else if (semester === "even") {
        pdfPath = "paste_path_to_maths_2021_even.pdf";
      }
    }
  }

  else if (subject === "Engineering Mathematics-II") {
    if (year === "2021-2022") {
      if (semester === "odd") {
        pdfPath = "paste_path_to_physics_2020_odd.pdf";
      } else if (semester === "Second Semester") {
        pdfPath = "PDFS/Maths2-sem2.pdf";
      }
    } else if (year === "2021") {
      if (semester === "odd") {
        pdfPath = "paste_path_to_physics_2021_odd.pdf";
      } else if (semester === "even") {
        pdfPath = "paste_path_to_physics_2021_even.pdf";
      }
    }
  }

  else if (subject === "Engineering Physics") {
    if (year === "2021-2022") {
      if (semester === "First Semester") {
        pdfPath = "PDFS/Physics-sem1.pdf";
      } else if (semester === "Second Semester") {
        pdfPath = "PDFS/Physics-sem2.pdf";
      }
    } else if (year === "2021") {
      if (semester === "odd") {
        pdfPath = "paste_path_to_science_2021_odd.pdf";
      } else if (semester === "even") {
        pdfPath = "paste_path_to_science_2021_even.pdf";
      }
    }
  }

  else if (subject === "Engineering Chemistry") {
    if (year === "2021-2022") {
      if (semester === "First Semester") {
        pdfPath = "PDFS/Chemistry-sem1.pdf";
      } else if (semester === "Second Semester") {
        pdfPath = "PDFS/Chemistry-sem2.pdf";
      }
    } else if (year === "2021") {
      if (semester === "odd") {
        pdfPath = "paste_path_to_science_2021_odd.pdf";
      } else if (semester === "even") {
        pdfPath = "paste_path_to_science_2021_even.pdf";
      }
    }
  }

  else if (subject === "Electronics Engineering") {
    if (year === "2021-2022") {
      if (semester === "First Semester") {
        pdfPath = "PDFS/Electronics-sem1.pdf";
      } else if (semester === "Second Semester") {
        pdfPath = "PDFS/Electronics-sem2.pdf";
      }
    } else if (year === "2021") {
      if (semester === "odd") {
        pdfPath = "paste_path_to_science_2021_odd.pdf";
      } else if (semester === "even") {
        pdfPath = "samplee.pdf";
      }
    }
  }

  else if (subject === "Electrical Engineering") {
    if (year === "2021-2022") {
      if (semester === "First Semester") {
        pdfPath = "PDFS/Electrical-sem1.pdf";
      } else if (semester === "Second Semester") {
        pdfPath = "PDFS/Electrical-sem2.pdf";
      }
    } else if (year === "2021") {
      if (semester === "odd") {
        pdfPath = "paste_path_to_science_2021_odd.pdf";
      } else if (semester === "even") {
        pdfPath = "samplee.pdf";
      }
    }
  }

  else if (subject === "Mechanical Engineering") {
    if (year === "2021-2022") {
      if (semester === "First Semester") {
        pdfPath = "PDFS/Mechanical-sem1.pdf";
      } else if (semester === "Second Semester") {
        pdfPath = "PDFS/Mechanical-sem2.pdf";
      }
    } else if (year === "2021") {
      if (semester === "odd") {
        pdfPath = "paste_path_to_science_2021_odd.pdf";
      } else if (semester === "even") {
        pdfPath = "samplee.pdf";
      }
    }
  }

  else if (subject === "Programming for problem solving") {
    if (year === "2021-2022") {
      if (semester === "First Semester") {
        pdfPath = "PDFS/Pps-sem1.pdf";
      } else if (semester === "Second Semester") {
        pdfPath = "PDFS/Pps-sem2.pdf";
      }
    } else if (year === "2021") {
      if (semester === "odd") {
        pdfPath = "paste_path_to_science_2021_odd.pdf";
      } else if (semester === "even") {
        pdfPath = "samplee.pdf";
      }
    }
  }

  else if (subject === "Softskill") {
    if (year === "2021-2022") {
      if (semester === "First Semester") {
        pdfPath = "PDFS/Softskill-sem1.pdf";
      } else if (semester === "Second Semester") {
        pdfPath = "PDFS/Softskill-sem2.pdf";
      }
    } else if (year === "2021") {
      if (semester === "odd") {
        pdfPath = "paste_path_to_science_2021_odd.pdf";
      } else if (semester === "even") {
        pdfPath = "samplee.pdf";
      }
    }
  }

  else if (subject === "Environment and Ecology") {
    if (year === "2022") {
      if (semester === "odd") {
        pdfPath = "sample.pdf";
      } else if (semester === "even") {
        pdfPath = "paste_path_to_science_2020_even.pdf";
      }
    } else if (year === "2021") {
      if (semester === "odd") {
        pdfPath = "paste_path_to_science_2021_odd.pdf";
      } else if (semester === "even") {
        pdfPath = "samplee.pdf";
      }
    }
  }


  // Open the PDF file in a new tab
  var newTab = window.open(pdfPath, '_blank');
  newTab.focus();
}

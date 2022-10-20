export const renderColor = (result) => {
    switch (result) {
      case "present":
        return "yellow";
      case "absent":
        return "gray";
      case "correct":
        return "lightgreen";
      default:
        return "black";
    }
  };
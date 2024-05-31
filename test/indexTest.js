describe('index.js', () => {

  const userInfo = {
    firstName: "Emma",
    lastName: "Johnson",
    company: {
      name: "Tech Solutions Inc.",
      jobTitle: "Software Engineer",
    },
    friends: [
      {
        firstName: "Alex",
        lastName: "Smith",
        company: {
          name: "Tech Solutions Inc.",
          jobTitle: "Product Manager",
        },
      },
      {
        firstName: "Michael",
        lastName: "Brown",
        company: {
          name: "Tech Solutions Inc.",
          jobTitle: "Data Analyst",
        },
      },
    ],
    projects: [
      {
        title: "Project X",
        description:
          "Revolutionary project aiming to change the landscape of AI.",
      },
      {
        title: "Project Y",
        description:
          "Innovative project focused on sustainable energy solutions.",
      },
    ],
  };

  describe('listAllKeys', () => {
    it('should return an array of all keys in a nested object', () => {
      const expectedKeys = [
        "firstName",
        "lastName",
        "company",
        "name",
        "jobTitle",
        "friends",
        "firstName",
        "lastName",
        "company",
        "name",
        "jobTitle",
        "firstName",
        "lastName",
        "company",
        "name",
        "jobTitle",
        "projects",
        "title",
        "description",
        "title",
        "description"
      ];
      expect(listAllKeys(userInfo)).to.deep.equal(expectedKeys);
    });
  });

  describe('countOccurrences', () => {
    it('should return the correct number of occurrences of a specified value in a nested object', () => {
      expect(countOccurrences(userInfo, "Tech Solutions Inc.")).to.equal(3);
      expect(countOccurrences(userInfo, "Product Manager")).to.equal(1);
      expect(countOccurrences(userInfo, "Project X")).to.equal(1);
    });

    it('should return 0 if the specified value does not exist in the nested object', () => {
      expect(countOccurrences(userInfo, "nonexistent")).to.equal(0);
    });
  });
});
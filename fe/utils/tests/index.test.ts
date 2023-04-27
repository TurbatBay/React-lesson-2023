import { cutTextToLength } from "../index";
import { slugify } from "../index";
import { composeArticleSlug } from "../index";
import { extractArticleIdFromSlug } from "../index";

// describe("cutTextToLength", () => {
    //   it("should cut text to length", () => {
//     expect(cutTextToLength(str, 20))
//            .toBe("The quick brown fox ...");
//   });


//   it("should not cut text to length", () => {
    //     expect(cutTextToLength(str, 100)).toBe(str);
    //   });
    // });
    
//     const str = "Hello World";
    
// describe("slugify", () => {
//     it("lowercase bolgono", () => {
//         expect(slugify(str))
//         .toBe("hello-world")
//     })


//       it("medku", () => {
//     expect(slugify(str)).toBe("hello-world");
//   });

// })


//function 2 
const title = "Awards"
const id = 101
describe("composeArticleSlug", () => {
    it("ner id 2 niilj haragdana", () => {
        expect(composeArticleSlug(id, title))
        .toBe("awards-101")
    })
})


//function 3

const slug = "awards-101"

describe("extractArticleIdFromSlug", () => {
    it("id ner 2 salj id g awna", () => {
        expect(extractArticleIdFromSlug(slug))
            .toBe("101")
    })
})
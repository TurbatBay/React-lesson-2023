export function cutTextToLength(str: string, maxLength: number) {
    return str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
  }
  


//function 1
export function slugify(str: string ){
    return str 
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-")
}

//function 2
export function composeArticleSlug(id: number, title: string) {
    return `${slugify(title)}-${id}`;
  }
  

//function 3

export function extractArticleIdFromSlug(slug: string) {
    return slug.split("-").pop();
  }
  
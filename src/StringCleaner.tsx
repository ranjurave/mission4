const StringCleaner = (input:string):string =>{
    const replaced = input.replace(/[^a-z0-9]/gi, ' ');
    return replaced.trim();
}
export {StringCleaner};


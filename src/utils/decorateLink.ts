
export const decorateLink = (link: string) => {
    if(link.includes('drive.google.com')) {
        return link.replace('/file/d/', '/uc?id=').replace('/view?usp=sharing', '');
    }
    return link;
}


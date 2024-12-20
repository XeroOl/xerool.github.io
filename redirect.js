if (window.location.pathname.startsWith('/notitg-mirin/')) {
    const newPath = window.location.pathname.replace('/notitg-mirin', '/mirin-template');
    const newUrl = `${window.location.origin}${newPath}`;
    window.location.replace(newUrl);
}

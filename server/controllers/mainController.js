/**
 * Get/
 * Homepage
 */
exports.homepage = async (req, res) => {
    const locals = {
        title: "NodeJS notes",
        description: "Free NodeJS Notes App",
    };

    res.render('index', {
        locals,
        layout: '../views/layouts/front-page'
    });
}

/**
 * Get/
 * about
 */
exports.about = async (req, res) => {
    const locals = {
        title: "About - NodeJS notes",
        description: "Free NodeJS Notes App",
    };

    res.render('about', locals);
}
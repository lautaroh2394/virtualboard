class TemplateManager {
    static async get(template, params) {
        const filename = `${template}.html`;
        const url = `${window.location.origin}/views/templates/${filename}`;
        const response = await fetch(url);
        const templateText = await response.text();
        return _.template(templateText)(params);
    }
}

export default TemplateManager;

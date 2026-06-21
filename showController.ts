export class ShowController {
    constructor(private showService: any) {}

    async getAllShows(req: any, res: any) {
        try {
            const shows = await this.showService.fetchShows();
            res.status(200).json(shows);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching shows' });
        }
    }

    async getShowById(req: any, res: any) {
        const { id } = req.params;
        try {
            const show = await this.showService.getShowById(id);
            if (show) {
                res.status(200).json(show);
            } else {
                res.status(404).json({ message: 'Show not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error fetching show' });
        }
    }
}
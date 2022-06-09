import { createServer, Model } from "miragejs";
import mockData from "./mockData";

export default function createMockServer() {
  createServer({
    models: {
      code: Model,
    },

    seeds(server) {
      server.db.loadData({ ...mockData });
    },

    routes() {
      this.urlPrefix = "http://localhost:8000";
      this.namespace = "code";
      this.get("", ({ db }) => {
        return {
          total: db.code.length,
          items: db.code.map((data) => ({
            id: data.id,
          })),
        };
      });
    },
  });
}

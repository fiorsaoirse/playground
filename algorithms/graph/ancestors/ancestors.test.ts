import { getAncestors } from './ancestors';

describe('Get ancestors', () => {
    it('for 8 nodes and edges [[0,3],[0,4],[1,3],[2,4],[2,7],[3,5],[3,6],[3,7],[4,6]]', () => {
        const nodes = 8;
        const edges = [[0, 3], [0, 4], [1, 3], [2, 4], [2, 7], [3, 5], [3, 6], [3, 7], [4, 6]];

        const result = [[], [], [], [0, 1], [0, 2], [0, 1, 3], [0, 1, 2, 3, 4], [0, 1, 2, 3]]

        /**
         *  - Nodes 0, 1, and 2 do not have any ancestors.
            - Node 3 has two ancestors 0 and 1.
            - Node 4 has two ancestors 0 and 2.
            - Node 5 has three ancestors 0, 1, and 3.
            - Node 6 has five ancestors 0, 1, 2, 3, and 4.
            - Node 7 has four ancestors 0, 1, 2, and 3.
         */
        expect(getAncestors(nodes, edges)).toEqual(result);
    });

    it('for 5 nodes and edges [[0,1],[0,2],[0,3],[0,4],[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]', () => {
        const nodes = 5;
        const edges = [[0, 1], [0, 2], [0, 3], [0, 4], [1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]];

        const result = [[], [0], [0, 1], [0, 1, 2], [0, 1, 2, 3]];
        /**
         *  - Node 0 does not have any ancestor.
            - Node 1 has one ancestor 0.
            - Node 2 has two ancestors 0 and 1.
            - Node 3 has three ancestors 0, 1, and 2.
            - Node 4 has four ancestors 0, 1, 2, and 3.
         */
        expect(getAncestors(nodes, edges)).toEqual(result);
    })
})
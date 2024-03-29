import { BinaryTree } from '../../../../data-structures/tree/binary-tree/binary-tree';
import { preOrderTraversal, preOrderTraversalIterative } from './pre-order-traversal';

describe('Pre-order traversal', () => {

    describe('Non-empty tree', () => {
        let tree: BinaryTree<number>;

        beforeAll(() => {
            tree = new BinaryTree<number>(
                1,
                new BinaryTree(
                    2,
                    new BinaryTree(
                        4,
                        null,
                        new BinaryTree(7)
                    ),
                    new BinaryTree(5)
                ),
                new BinaryTree(
                    3,
                    null,
                    new BinaryTree(6)
                )
            );
        });

        test('Recoursive traversal', () => {
            const result = [1, 2, 4, 7, 5, 3, 6];
            expect(preOrderTraversal(tree)).toEqual(result);
        });

        test('Iterative traversal', () => {
            const result = [1, 2, 4, 7, 5, 3, 6];
            expect(preOrderTraversalIterative(tree)).toEqual(result);
        });
    });

    describe('Left-side only tree', () => {
        let tree: BinaryTree<number>;

        beforeAll(() => {
            tree = new BinaryTree(
                8,
                new BinaryTree(
                    7,
                    new BinaryTree(
                        6,
                        new BinaryTree(
                            5,
                            new BinaryTree(
                                4,
                                new BinaryTree(
                                    3,
                                    new BinaryTree(
                                        2,
                                        new BinaryTree(1)
                                    )
                                )
                            )
                        )
                    )
                )
            )
        });

        test('Recoursive traversal', () => {
            const result = [8, 7, 6, 5, 4, 3, 2, 1];
            expect(preOrderTraversal(tree)).toEqual(result);
        });

        test('Iterative traversal', () => {
            const result = [8, 7, 6, 5, 4, 3, 2, 1];
            expect(preOrderTraversalIterative(tree)).toEqual(result);
        });
    });

    describe('Right-side only tree', () => {
        let tree: BinaryTree<number>;

        beforeAll(() => {
            tree = new BinaryTree(
                8,
                null,
                new BinaryTree(
                    7,
                    null,
                    new BinaryTree(
                        6,
                        null,
                        new BinaryTree(
                            5,
                            null,
                            new BinaryTree(
                                4,
                                null,
                                new BinaryTree(
                                    3,
                                    null,
                                    new BinaryTree(
                                        2,
                                        null,
                                        new BinaryTree(1)
                                    )
                                )
                            )
                        )
                    )
                )
            )
        });

        test('Recoursive traversal', () => {
            const result = [8, 7, 6, 5, 4, 3, 2, 1];
            expect(preOrderTraversal(tree)).toEqual(result);
        });

        test('Iterative traversal', () => {
            const result = [8, 7, 6, 5, 4, 3, 2, 1];
            expect(preOrderTraversalIterative(tree)).toEqual(result);
        });
    });

    describe('Empty tree', () => {
        let tree: null;

        beforeAll(() => {
            tree = null;
        });

        test('Recoursive traversal', () => {
            const result = [];
            expect(preOrderTraversal(tree)).toEqual(result);
        });

        test('Iterative traversal', () => {
            const result = [];
            expect(preOrderTraversalIterative(tree)).toEqual(result);
        });
    });
});
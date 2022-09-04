/* eslint-disable */

import { InstructionType } from "./Instruction";


export class InstructionCostCalculator {
    static baseCostMap: Map<InstructionType, number> = new Map([
        [InstructionType.NopInstructionType,            0],
        [InstructionType.CommentInstructionType,        0],
        [InstructionType.ColorInstructionType,          5],
        [InstructionType.VerticalCutInstructionType,    7],
        [InstructionType.HorizontalCutInstructionType,  7],
        [InstructionType.PointCutInstructionType,       10],
        [InstructionType.SwapInstructionType,           3],
        [InstructionType.MergeInstructionType,          1],
    ])

    static baseCostMapV2: Map<InstructionType, number> = new Map([
        [InstructionType.NopInstructionType,            0],
        [InstructionType.CommentInstructionType,        0],
        [InstructionType.ColorInstructionType,          5],
        [InstructionType.VerticalCutInstructionType,    2],
        [InstructionType.HorizontalCutInstructionType,  2],
        [InstructionType.PointCutInstructionType,       3],
        [InstructionType.SwapInstructionType,           3],
        [InstructionType.MergeInstructionType,          1],
    ])


    static getCost(instructionType: InstructionType, blockSize: number, canvasSize: number, problemID: number): number {
        let baseCost;
        if (problemID < 36) {
            baseCost = this.baseCostMap.get(instructionType) as number;
        } else {
            baseCost = this.baseCostMapV2.get(instructionType) as number;
        }

        const totalCost = Math.round(baseCost * (canvasSize / blockSize));
        return totalCost;
    }
}
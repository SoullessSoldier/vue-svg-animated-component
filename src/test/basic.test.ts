import { mount } from '@vue/test-utils';
import CpuIcon from '../components/CpuIcon.vue';
import HddIcon from '../components/HddIcon.vue';
import RamIcon from '../components/RamIcon.vue';
import { describe, expect, test } from "vitest";

describe("CpuIcon.vue basic test", () => {
    test("CpuIcon good health", () => {
        const health = true;
        const wrapper = mount(CpuIcon, {
            props: {
                health
            },
        });
        expect(wrapper.classes()).not.toContain("bad"
        );
    });
    test("CpuIcon bad health", () => {
        const health = false;
        const wrapper = mount(CpuIcon, {
            props: {
                health
            },
        });
        expect(wrapper.classes()).toEqual(
            expect.arrayContaining(["cpu-icon", "bad"])
        );
    });
});

describe("HddIcon.vue basic test", () => {
    test("HddIcon good health", () => {
        const health = true;
        const wrapper = mount(HddIcon, {
            props: {
                health
            },
        });
        expect(wrapper.classes()).not.toContain("bad"
        );
    });
    test("HddIcon bad health", () => {
        const health = false;
        const wrapper = mount(HddIcon, {
            props: {
                health
            },
        });
        expect(wrapper.classes()).toEqual(
            expect.arrayContaining(["hdd-icon", "bad"])
        );
    });
});

describe("RamIcon.vue basic test", () => {
    test("RamIcon good health", () => {
        const health = true;
        const wrapper = mount(RamIcon, {
            props: {
                health
            },
        });
        expect(wrapper.classes()).not.toContain("bad"
        );
    });
    test("RamIcon bad health", () => {
        const health = false;
        const wrapper = mount(RamIcon, {
            props: {
                health
            },
        });
        expect(wrapper.classes()).toEqual(
            expect.arrayContaining(["ram-icon", "bad"])
        );
    });
});


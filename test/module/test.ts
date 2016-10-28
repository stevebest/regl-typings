
import REGL = require('regl');

/* Creating a REGL object */

const div = document.querySelector('#my-container') as HTMLDivElement;
const canvas = document.querySelector('#my-canvas') as HTMLCanvasElement;
const gl = canvas.getContext('webgl') as WebGLRenderingContext;

REGL();
REGL('#my-element');
REGL(div);
REGL(canvas);
REGL(gl);
REGL({
    canvas: undefined,
    gl: undefined,
    container: undefined,
    extensions: [''],
    optionalExtensions: [''],
    pixelRatio: 2,
    profile: false,
    attributes: {
        alpha: true,
        antialias: true,
        depth: true,
        failIfMajorPerformanceCaveat: false,
        premultipliedAlpha: false,
        preserveDrawingBuffer: true,
        stencil: true,
    },
    onDone(err, regl) {
        if (err === null && regl) {
            regl.draw();
        }
    }
});

const regl: REGL = REGL();

// Add listeners using regl.on(...) 
const onFrame = regl.on("frame", () => { });
const onLost = regl.on("lost", () => { });
const onRestore = regl.on("restore", () => { });
const onDestroy = regl.on("destroy", () => { });
// Remove listeners by calling .cancel()
onFrame.cancel();
onLost.cancel();
onRestore.cancel();
onDestroy.cancel();

// Clear
regl.clear({
    color: [1, 1, 1, 1],
    depth: 1.0,
    stencil: 0,
    framebuffer: null,
});

// Commands
const drawNothing: REGL.Command = regl({});

const drawTriangle: REGL.Command = regl({
    vert: '',
    frag: '',

    uniforms: {
        color: [],
        translation: regl.this('translation'),
    },

    attributes: {
        // Attributes can be declared explicitly
        normals: {
            buffer: regl.buffer([1, 2, 3, 4]),
            offset: 0,
            stride: 12,
            normalized: false,
            // divisor is only used if instancing is enabled
            divisor: 0
        },

        // A regl.buffer or the arguments to regl.buffer may also be specified
        position: [
            0, 1, 2,
            2, 3, 4,
        ],

        // Finally, attributes may be initialized with a constant value
        color: {
            constant: [1, 0, 1, 1]
        }
    },

    framebuffer: null,
});

const t = regl.texture();
const c = regl.cube();

const fbcube = regl.framebufferCube(16);

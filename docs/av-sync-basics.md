# AV Sync Basics

AV sync depends on stable clocks, consistent cadence, and predictable buffering.

## Core Rules

- Keep camera output frame rate aligned with ingest and program settings.
- Keep audio interface and host on a single sample rate.
- Minimize hidden resampling and frame conversion steps.

## Practical Targets

- Prefer 48000 Hz for audio in video pipelines.
- Use fixed frame rates for production scenes.
- Re-test sync after firmware or driver changes.

## Troubleshooting Sequence

1. Verify source timing first.
2. Verify capture and ingest conversion behavior.
3. Verify ecosystem buffer and sync offset settings.
4. Re-run long-duration drift tests.

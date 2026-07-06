ServerEvents.recipes(event => {
     event.custom({
        "type": "create:mechanical_crafting",
        "accept_mirrored":false,
        "category": "misc",
        "key": {
            "A": {
            "item": 'anvilcraft:transcendium_ingot'
            },
            "M": {
            "item": 'anvilcraft:transcendium_upgrade_smithing_template'
            },
            "E": {
            "item": 'create_fantasizing:compact_hydraulic_engine'
            },
            "R": {
            "item": 'createpropulsion:stirling_engine'
            },
            "T": {
            "item": 'create_fantasizing:compact_wind_engine'
            },
            "W": {
            "item": 'functionalstorage:water_generator_upgrade'
            },
            "C": {
            "item": 'create:fluid_tank'
            },
            "Y": {
            "item": 'create:steam_engine'
            },
            "L": {
            "item": 'functionalstorage:dripping_upgrade'
            },
            "F": {
            "item": 'create:flywheel'
            },
            "Z": {
            "item": 'fluid:pipette'
            },
            "K":{
            "item":'create:rotation_speed_controller'    
            }

        },
        "pattern": [
            " AMA ",
            "AWERA",
            "AZCYK",
            "ALTFA",
            " AAA "
        ],
        "result": {
            "count": 1,
            "id": 'create:creative_motor'
        },
        "show_notification": false
    })

    event.custom({
        "type": "create:mechanical_crafting",
        "accept_mirrored": false,
        "category": "misc",
        "key": {
            "A": {
            "item": 'anvilcraft:transcendium_ingot'
            },
            "B": {
            "item": 'anvilcraft:induction_light'
            },
            "P": {
            "tag": 'c:plates/obsidian'
            }
        },
        "pattern": [
            "A A",
            "APA",
            " B ",
            " P ",
            " A "
        ],
        "result": {
            "count": 1,
            "id": 'simulated:creative_physics_staff'
        },
        "show_notification": false
    })

    event.smithing(
        'create_aeronautics_toolgun:structure_tool',
        'anvilcraft:transcendium_upgrade_smithing_template',
        'create_aeronautics_toolgun:survival_structure_tool',
        'anvilcraft:transcendium_block'
    )

    event.smithing(
        'create_aeronautics_toolgun:creative_magnetic_gun',
        'anvilcraft:transcendium_upgrade_smithing_template',
        'create_aeronautics_toolgun:magnetic_gun',
        'anvilcraft:transcendium_block'
    )

    event.smithing(
        'createpropulsion:creative_vector_thruster',
        'anvilcraft:transcendium_upgrade_smithing_template',
        'createpropulsion:vector_thruster',
        'anvilcraft:transcendium_block'
    )

    event.smithing(
        'create:creative_blaze_cake',
        'anvilcraft:transcendium_upgrade_smithing_template',
        'create:blaze_cake',
        'anvilcraft:transcendium_block'
    )

    event.smithing(
        'createpropulsion:creative_thruster',
        'anvilcraft:transcendium_upgrade_smithing_template',
        'createpropulsion:thruster',
        'anvilcraft:transcendium_block'
    )

    // 推进工艺工具合成配方
    const creative = (output, input) => {
        event.shapeless(
            Item.of(output, 1),
            [
                'create:transmitter',
                'create:precision_mechanism',
                input
            ]
        )
    }
    creative('createpropulsion:assembler_stick','simulated:physics_assembler')
    creative('createpropulsion:auto_glue','simulated:honey_glue')
    creative('createpropulsion:glued_contraption_mover','drivebywire:wire_cutter')
    creative('createpropulsion:glued_contraption_cloner','create:super_glue')
    creative('createpropulsion:contraption_remover','kaleidoscope_cookery:trash_can')
})
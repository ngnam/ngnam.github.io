import Head from 'next/head'
import FormInput from '../../../components/form-input/formInput'
import FormGroupInput from '../../../components/form-input/formGroupInput'
import { useRef, useState, useMemo } from 'react';
import { useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard/lib/Component';
import { useRouter } from 'next/router'
import { HTML_SYMBOL } from '../../../lib/constants';
import { v4 as uuidv4 } from 'uuid';
import styles from './css.module.css';
import cn from 'classnames'

export default function GradientCssGenerator() {
    const router = useRouter()
    const textArea = useRef(null);

    const [formValues, setValues] = useState({
        orientation: 'linear-gradient',
        degree: 90,
        size: 'farthest-corner',
        position: 'center center',
        startColor: '#ff0000',
        startColorOpacity: 0,
        endColor: '#00ff00',
        endColorOpacity: 80,
    });

    const [cssGeneerate, setCssGeneerate] = useState(null);
    const [copyValue, setCopyValue] = useState(null);

    const [formStopper, setFormStopper] = useState({})
    const [stopperColors, setStopperColors] = useState([]);

    const isEmpty = (obj) => {
        return Object.keys(obj).length === 0;
    }

    useEffect(() => {
        let cssGenerate = '';
        if (formValues.orientation.indexOf('radial') > -1) {
            const orientations = formValues.orientation.split(' ');
            if (!isEmpty(formStopper)) { 
                cssGenerate = `${orientations[0]}(${orientations[1]} ${formValues.size} at ${formValues.position}, ${formValues.startColor} ${formValues.startColorOpacity}%, `;
                Object.values(formStopper).forEach(stopper => {
                    const keys = Object.keys(stopper);
                    cssGenerate += `${stopper[keys[0]]} ${stopper[keys[1]]}%, `
                })
                cssGenerate += `${formValues.endColor} ${formValues.endColorOpacity}%)`
            } else {
                cssGenerate = `${orientations[0]}(${orientations[1]} ${formValues.size} at ${formValues.position}, ${formValues.startColor} ${formValues.startColorOpacity}%, ${formValues.endColor} ${formValues.endColorOpacity}%)`
            }
            // radial-gradient(circle farthest-corner at center center, #ff0000 0%, #00ff00 80%);
        } else {
            if (!isEmpty(formStopper)) {
                cssGenerate = `${formValues.orientation}(${formValues.degree}deg,${formValues.startColor} ${formValues.startColorOpacity}%, `;
                Object.values(formStopper).forEach(stopper => {
                    const keys = Object.keys(stopper);
                    cssGenerate += `${stopper[keys[0]]} ${stopper[keys[1]]}%, `
                })
                cssGenerate += `${formValues.endColor} ${formValues.endColorOpacity}%)`
            } else {
                cssGenerate = `${formValues.orientation}(${formValues.degree}deg,${formValues.startColor} ${formValues.startColorOpacity}%, ${formValues.endColor} ${formValues.endColorOpacity}%)`;
            }
        }

        setCssGeneerate(cssGenerate);

        const copyText = `background: ${formValues.startColor};\n`+
        `background: ${cssGenerate};\n`+
        `background: -webkit-${cssGenerate};\n`+
        `background: -moz-${cssGenerate};\n`;

        textArea.current.value = copyText;
        setCopyValue(copyText);

    }, [formValues, formStopper]);

    const optionOrientation = [
        { label: 'Linear', value: 'linear-gradient' }, // degree
        { label: 'Radial', value: 'radial-gradient circle' }, // size, position
        { label: 'Elliptical', value: 'radial-gradient ellipse' }, // size, position
        { label: 'Repeat linear', value: 'repeating-linear-gradient' }, // degree
        { label: 'Repeat radial', value: 'repeating-radial-gradient circle' }, // size, position
        { label: 'Repeat elliptical', value: 'repeating-radial-gradient ellipse ' } // size, position
    ]

    const optionSize = [
        { label: 'farthest-corner', value: 'farthest-corner' },
        { label: 'farthest-side', value: 'farthest-side' },
    ]

    const optionPosition = [
        { label: 'top left', value: 'top left' },
        { label: 'top center', value: 'top center' },
        { label: 'top right', value: 'top right' },
        { label: 'left center', value: 'left center' },
        { label: 'center center', value: 'center center' },
        { label: 'right center', value: 'right center' },
        { label: 'bottom left', value: 'bottom left' },
        { label: 'bottom center', value: 'bottom center' },
        { label: 'bottom right', value: 'bottom right' },
    ]

    const [inputs, setInputs] = useState([
        {
            id: 1,
            name: "orientation",
            label: "Orientation",
            type: "select",
            options: JSON.parse(JSON.stringify(optionOrientation)),
        },
        {
            id: 2,
            name: "degree",
            type: "range",
            min: 0,
            max: 360,
            step: 1,
            unit: HTML_SYMBOL.degreeSign,
            hidden: false,
            label: "Degree",
        },
        {
            id: 3,
            name: "size",
            label: "Size",
            type: "select",
            options: JSON.parse(JSON.stringify(optionSize)),
            hidden: true,
        },
        {
            id: 4,
            name: "position",
            label: "Position",
            type: "select",
            options: JSON.parse(JSON.stringify(optionPosition)),
            hidden: true,
        },
        {
            id: 5,
            name: "startColor",
            group: "Start Color",
            type: "color",
            col: 2,
            hidden: false,
        },
        {
            id: 6,
            name: "startColorOpacity",
            group: "Start Color",
            type: "number",
            col: 2,
            hidden: false,
            unit: '%'
        },
        {
            id: 7,
            name: "endColor",
            group: "End Color",
            type: "color",
            col: 2,
            hidden: false,
        },
        {
            id: 8,
            name: "endColorOpacity",
            group: "End Color",
            type: "number",
            col: 2,
            hidden: false,
            unit: '%'
        },
    ]);

    const handleCopy = (e) => {
    };

    const onChange = (e) => {
        if (e.target.name === 'orientation') {
            setInputs(state => {
                return state.map(input => {
                    if (input.name === 'degree') {
                        input.hidden = e.target.value.indexOf('radial') > -1
                    }
                    if (input.name === 'size') {
                        input.hidden = e.target.value.indexOf('linear') > -1
                    }
                    if (input.name === 'position') {
                        input.hidden = e.target.value.indexOf('linear') > -1
                    }
                    return input
                })
            })
        }
        setValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const addStopper = () => {
        let index = uuidv4();
        let stopperColor_index = `stopperColor_1_${index}`
        let stopperColorOpacity_index = `stopperColorOpacity_2_${index}`
        const stopper = {
            label: 'Stopper Color',
            id: index,
            controls: [
                {
                    id: `1_${index}`,
                    name: stopperColor_index,
                    group: "Stopper Color",
                    type: "color",
                    col: 2,
                    hidden: false,
                },
                {
                    id: `2_${index}`,
                    name: stopperColorOpacity_index,
                    group: "Stopper Color",
                    type: "number",
                    col: 2,
                    hidden: false,
                    unit: '%'
                }
            ]
        }

        setFormStopper((formStopper) => {
            // formStopper[index] = {};
            // formStopper[index][stopperColor_index] = '#ffff00';
            // formStopper[index][stopperColorOpacity_index] = 40
            return {
                ...formStopper, [index]: {
                    [stopperColor_index]: '#ffff00',
                    [stopperColorOpacity_index]: 40
                }
            };
        })
        setStopperColors((stopperColors) => [...stopperColors, stopper ]);
    }

    const removeStopper = (index, id) => {
        setFormStopper((formStopper) => {
            delete formStopper[id]
            return {...formStopper};
        })
        setStopperColors((stopperColors) => [...stopperColors.slice(0, index), ...stopperColors.slice(index + 1)]);
    }

    const onChangeStopper = (e, id) => {
        setFormStopper((formStopper) => {
            const item = formStopper[id];
            const cloneItem = JSON.parse(JSON.stringify(item))
            delete formStopper[id]
            cloneItem[e.target.name] = e.target.value;
            return {...formStopper, [id]: cloneItem};
        })
    }

    // render components
    return (
        <>
            <Head>
                <title>Gradient CSS Generator</title>
                <meta name="description" content="Gradient CSS Generator CSS Generator tool - a product by nguyen van nam 0928351036" />
            </Head>
            <header className={styles.header}>
                <div className={cn([styles.container, 'container'])}>
                    <h1>A Product of Nguyen Van Nam</h1>
                    <h3>Gradient CSS Generator</h3>
                    <span className={styles["link-back"]} onClick={() => router.back()}>
                        <a><span>&#8592;</span> Back</a>
                    </span>
                </div>
            </header>
            <section className={cn([styles.container, 'container'])}>
                <div className={styles["item-container"]}>
                    <form>
                        <h1>Gradient Options</h1>
                        
                        {inputs
                            .filter(x => !x.group)
                            .map((input) => (
                                <FormInput
                                    key={input.id}
                                    {...input}
                                    value={formValues[input.name]}
                                    onChange={onChange}
                                />
                            ))}

                        <FormGroupInput label="Start Color" isShow={true}>
                            <>
                                {
                                    inputs
                                        .filter(x => x.group === "Start Color")
                                        .map((input) => (
                                            <FormInput
                                                key={input.id}
                                                {...input}
                                                value={formValues[input.name]}
                                                onChange={onChange}
                                            />
                                        ))
                                }
                            </>
                        </FormGroupInput>

                        {/* // stoppers */}
                        { stopperColors.length > 0 && (
                            <>
                                {stopperColors.map((stopper, index) => (
                                    <div key={stopper.id}>
                                        <label className="text-orange-600" onClick={() => removeStopper(index, stopper.id)}>x</label>
                                        <FormGroupInput label={stopper.label} isShow={true} inline={false}>
                                            <>
                                                {
                                                    stopper.controls.map((input) => (
                                                        <FormInput key={input.id} {...input} 
                                                        value={formStopper[stopper.id][input.name]}
                                                        onChange={(e) => onChangeStopper(e, stopper.id)} />
                                                    ))
                                                }
                                            </>
                                        </FormGroupInput>
                                    </div>
                                ))}
                            </>
                        )}

                        <FormGroupInput label="End Color" isShow={true}>
                            <>
                                {
                                    inputs
                                        .filter(x => x.group === "End Color")
                                        .map((input) => (
                                            <FormInput
                                                key={input.id}
                                                {...input}
                                                value={formValues[input.name]}
                                                onChange={onChange}
                                            />
                                        ))
                                }
                            </>
                        </FormGroupInput>

                    </form>
                    <button className="py-2 px-3 bg-indigo-500 text-white text-sm font-semibold rounded-md shadow focus:outline-none" onClick={addStopper}>Add Stopper</button>
                </div>

                <div className={cn([styles["item-container"], styles.box])}>
                    <div className={styles["item-preview"]} style={{
                        background: cssGeneerate,
                        width: '100%',
                        minHeight: '300px',
                        maxHeight: '300px',
                        marginTop: '100px'
                    }}>
                        Gradient CSS generator
                    </div>

                    <div className={styles["item-code"]}>
                        <textarea placeholder="css generator" rows="5" cols="20" ref={textArea}>
                        </textarea>
                        <div className={styles["item-action"]}>
                            <CopyToClipboard text={copyValue} onCopy={handleCopy}>
                                <button className="p-2">Copy</button>
                            </CopyToClipboard>
                        </div>
                    </div>

                  
                </div>
            </section>
            
            <footer className={styles.footer}>
                <div className={cn([styles.container, 'container'])}>
                    <p>A gradient CSS generator that helps you quickly generate gradient CSS declarations for your website. It comes with many options and it demonstrates instantly. </p>
                </div>
            </footer>

        </>
    )
}

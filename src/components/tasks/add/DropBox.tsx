import React, { useRef, useState } from 'react';
import {  UploadCloud } from 'lucide-react';
import Image from 'next/image';

import {resizeFile} from "@/lib/resizeFile";

interface VanillaDropBoxProps {
    setActivityImage: (data: File | undefined | null) => void;
    name?: string;
    initialImage?: File | null | string;
}
export const DropBox = ({
    setActivityImage,
    name,
    initialImage,
}: VanillaDropBoxProps) => {
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);
    const [resizedImage, setResizedImage] = useState<
        File | undefined | null | string
    >(initialImage || null);

    // Handle drag and Drop events
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };
    // Handle drag and Drop events
    const handleDragLeave = () => {
        setIsDragging(false);
    };
    const handleClick = () => {
        // @ts-ignore
        fileInputRef.current.click();
    };
    const handleChange = async (files: FileList) => {
        const file = files[0];

        const resizedFile = await resizeFile({
            file,
            width: 800,
            height: 500,
            imageName: file.name,
        });
        setResizedImage(resizedFile);
        setActivityImage(resizedFile);
    };

    const targetClassName = `flex h-[200px] w-full cursor-pointer items-center justify-center rounded-xl border ${
        isDragging
            ? 'border-2 bg-secondary-light-25 border-primary-500'
            : 'border-secondary-light-100 '
    } px-[24px] py-[16px] focus:border-primary-500`;

    return (
        <>
            {resizedImage && (
                <div id="image" className="relative flex">
                    <div
                        className={`max-w-auto max-h-auto relative`}
                    >
                        {name && (
                            <div className=" border-1 absolute left-3 top-4 z-10 rounded-2xl bg-white px-2 py-1 text-[8px] text-secondary-light-700">
                                {name}
                            </div>
                        )}

                        <Image
                            src={
                                resizedImage instanceof File
                                    ? URL.createObjectURL(resizedImage)
                                    : resizedImage
                            }
                            width={800}
                            height={500}
                            alt="image"
                            className={`relative rounded-lg w-auto h-auto`}
                        />
                    </div>
                </div>
            )}
            {!resizedImage && (
                <div
                    role="presentation"
                    onDragOver={handleDragOver}
                    onDrop={(event) => {
                        event.preventDefault();

                        const { files } = event.dataTransfer;
                        if (files && files.length > 0) {
                            handleChange(files);
                        }

                        setIsDragging(false);
                    }}
                    onDragLeave={handleDragLeave}
                    onClick={handleClick}
                >
                    <div className={targetClassName}>
                        <div className="flex flex-col items-center justify-center gap-[12px] ">
                            <div className="flex h-[40px] w-[40px] items-center justify-center rounded-lg border-2 bg-white drop-shadow-sm">
                                <UploadCloud
                                    width="25"
                                    height="25"
                                    className="text-secondary-dark-600"
                                />
                            </div>

                            <div>
                                <p className="w-[280px] text-center  text-[13px] font-light text-secondary-dark-600">
                  <span className="text-[16px] font-medium text-primary-700">
                    Click to upload{' '}
                  </span>

                                    {`or Drag and Drop JPG PNG only. Max size 5MB`}
                                </p>
                            </div>
                        </div>
                        <input
                            id="input"
                            type="file"
                            className=" cursor-pointer "
                            hidden
                            onChange={(event) => {
                                const { files } = event.target;
                                if (files && files.length > 0) {
                                    handleChange(files);
                                }
                            }}
                            ref={fileInputRef}
                        />
                    </div>
                </div>
            )}
        </>
    );
}
